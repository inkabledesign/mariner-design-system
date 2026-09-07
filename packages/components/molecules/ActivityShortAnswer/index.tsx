import React, { useEffect, useState } from 'react';
import { TextInput, Platform } from 'react-native';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import Button from '../Button';
import { theme } from '@inkabledesign/mariner-theme';
import type { ActivityShortAnswerProps, ShortAnswerQuestion } from './index.types';

const checkAnswer = (question: ShortAnswerQuestion, answer: string): boolean => {
  if (!question.acceptedAnswers?.length) return false;
  const normalize = (s: string) => (question.caseSensitive ? s.trim() : s.trim().toLowerCase());
  const normalized = normalize(answer);
  return question.acceptedAnswers.some(a => normalize(a) === normalized);
};

const FeedbackBanner = ({ text, isCorrect }: { text: string; isCorrect: boolean }) => (
  <Row
    className={`items-start gap-sm rounded-md border p-md ${
      isCorrect
        ? 'border-system-success-100 bg-system-success-5'
        : 'border-system-error-100 bg-system-error-5'
    }`}
  >
    <Icon
      iconName={isCorrect ? 'ico-tick-round' : 'ico-close-round'}
      color={isCorrect ? 'text-system-success-100' : 'text-system-error-100'}
      className="w-5 h-5"
    />
    <TextStyled textStyle="footnote" className="flex-1 text-material-surface-100">
      {text}
    </TextStyled>
  </Row>
);

/**
 * ActivityShortAnswer Component (Molecule)
 *
 * A free-text answer activity with optional accepted-answer validation,
 * case sensitivity, character limit, and feedback. Interaction state is a
 * view concern; the aggregate result is reported via `onComplete`.
 * Source: mariner-edu molecules/ActivityShortAnswer (simplified: Sanity
 * checkers → inline matching; hardcoded fonts/colors → theme tokens).
 *
 * @example
 * <ActivityShortAnswer questions={[{ question: '…?', acceptedAnswers: ['MAYDAY'] }]} onComplete={fn} />
 */
const ActivityShortAnswer = ({
  questions,
  totalActivities = 1,
  currentQuestionIndex = 0,
  asset,
  onComplete,
  className = '',
}: ActivityShortAnswerProps) => {
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [allAnswers, setAllAnswers] = useState<string[]>(() => Array(questions.length).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = questions[0];
  const maxLength = question.maxLength ?? 500;
  const remainingChars = maxLength - currentAnswer.length;
  const isCorrect = isSubmitted && checkAnswer(question, currentAnswer);
  const hasValidation = !!question.acceptedAnswers?.length;

  const handleSubmit = () => {
    if (currentAnswer.trim().length === 0) return;
    const next = [...allAnswers];
    next[0] = currentAnswer;
    setAllAnswers(next);
    setIsSubmitted(true);
    setShowFeedback(true);
  };

  useEffect(() => {
    if (!isSubmitted || !allAnswers.some(a => a.trim().length > 0)) return;
    const correctCount = allAnswers.reduce(
      (count, answer, i) => count + (checkAnswer(questions[i], answer) ? 1 : 0),
      0
    );
    onComplete?.({
      answers: allAnswers,
      score: Math.round((correctCount / questions.length) * 100),
      isCorrect: correctCount === questions.length,
    });
  }, [allAnswers, isSubmitted, questions, onComplete]);

  return (
    <Column className={`gap-md ${className}`.trim()}>
      <Row className="justify-between items-center">
        <TextStyled textStyle="label" className="text-brand-primary-100">
          Short Answer
        </TextStyled>
        <TextStyled textStyle="label" className="text-material-surface-100">
          Question {currentQuestionIndex + 1} of {totalActivities}
        </TextStyled>
      </Row>

      {asset}

      <Column className="gap-sm">
        <TextStyled textStyle="body" fontWeight="500" className="mb-sm text-material-surface-100">
          {question.question}
        </TextStyled>
        {question.caseSensitive && !isSubmitted && (
          <TextStyled textStyle="caption" className="text-material-surface-100">
            Note: Answer is case-sensitive
          </TextStyled>
        )}
      </Column>

      <Column className="gap-xs">
        <ViewStyled
          className={`border rounded-sm p-md ${
            isSubmitted
              ? isCorrect
                ? 'border-system-success-100 bg-system-success-5'
                : 'border-system-error-100 bg-system-error-5'
              : 'border-brand-primary-alpha-20 bg-material-surface-0'
          }`}
        >
          <TextInput
            value={currentAnswer}
            onChangeText={text => text.length <= maxLength && setCurrentAnswer(text)}
            placeholder={question.placeholder ?? 'Type your answer here...'}
            placeholderTextColor={theme.color.light.material.surface['40']}
            multiline
            numberOfLines={4}
            maxLength={maxLength}
            editable={!isSubmitted}
            style={{
              fontSize: theme.typography.mobile.text.body.fontSize,
              lineHeight: theme.typography.mobile.text.body.lineHeight,
              color: theme.color.light.brand.primary['100'],
              minHeight: 100,
              textAlignVertical: 'top',
            }}
          />
        </ViewStyled>

        <Row className="justify-between">
          <TextStyled textStyle="footnote" className="text-material-surface-80">
            max. {maxLength} characters
          </TextStyled>
          {remainingChars < 50 && remainingChars >= 0 && (
            <TextStyled
              textStyle="footnote"
              className={
                remainingChars < 10 ? 'text-system-warning-100' : 'text-material-surface-80'
              }
            >
              {remainingChars} remaining
            </TextStyled>
          )}
        </Row>
      </Column>

      {showFeedback && question.feedback && (
        <FeedbackBanner text={question.feedback} isCorrect={isCorrect} />
      )}

      {isSubmitted && !hasValidation && (
        <Row className="items-start gap-sm rounded-md border border-brand-primary-20 bg-brand-primary-alpha-5 p-md">
          <Icon iconName="ico-info-round" color="text-brand-primary-100" className="w-5 h-5" />
          <TextStyled textStyle="footnote" className="flex-1 text-material-surface-100">
            Your answer has been recorded. There is no automatic validation for this question.
          </TextStyled>
        </Row>
      )}

      <Row className="gap-sm mt-md">
        {!isSubmitted && (
          <Button
            text="Submit Answer"
            variant="primary"
            onPress={handleSubmit}
            disabled={currentAnswer.trim().length === 0}
            className="flex-1"
          />
        )}
      </Row>
    </Column>
  );
};

export default ActivityShortAnswer;
