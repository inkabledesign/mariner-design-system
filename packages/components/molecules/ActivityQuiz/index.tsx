import React, { useEffect, useState } from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import Icon from '../../atoms/Icon';
import Button from '../Button';
import type { ActivityQuizProps, QuizQuestion } from './index.types';

const isQuestionCorrect = (
  question: QuizQuestion,
  type: ActivityQuizProps['type'],
  answers: number[]
): boolean => {
  if (type === 'multiple-choice') {
    const expected = [...(question.answerIndices ?? [])].sort();
    const actual = [...answers].sort();
    return expected.length === actual.length && expected.every((v, i) => v === actual[i]);
  }
  return answers.length === 1 && answers[0] === question.answerIndex;
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
 * ActivityQuiz Component (Molecule)
 *
 * Single-choice, multiple-choice, and true/false quiz questions with
 * immediate feedback. Selection/submission is view interaction state; scoring
 * is reported to the consumer via `onComplete`.
 * Source: mariner-edu molecules/ActvityQuiz (renamed: typo fix; Sanity
 * checkers → inline evaluation; TileInfo → inline feedback banner).
 *
 * @example
 * <ActivityQuiz type="single-choice" questions={[{ question: '…?', options: ['A','B'], answerIndex: 0 }]} onComplete={fn} />
 */
const ActivityQuiz = ({
  questions,
  type,
  totalActivities = 1,
  currentQuestionIndex = 0,
  asset,
  onComplete,
  className = '',
}: ActivityQuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [allAnswers, setAllAnswers] = useState<number[][]>(
    () => Array(questions.length).fill([])
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[0];
  const isSingleChoice = type === 'single-choice' || type === 'true-false';

  const isOptionCorrect = (index: number) =>
    type === 'multiple-choice'
      ? (question.answerIndices ?? []).includes(index)
      : index === question.answerIndex;

  const handleOptionPress = (index: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev =>
      isSingleChoice ? [index] : prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) return;
    const next = [...allAnswers];
    next[0] = selectedAnswers;
    setAllAnswers(next);
    setIsSubmitted(true);
    setShowExplanation(true);
  };

  useEffect(() => {
    if (!isSubmitted || !allAnswers.some(a => a.length > 0)) return;
    const correctCount = allAnswers.reduce(
      (count, answers, i) =>
        count + (isQuestionCorrect(questions[i], type, answers) ? 1 : 0),
      0
    );
    onComplete?.({
      answers: allAnswers,
      score: Math.round((correctCount / questions.length) * 100),
      isCorrect: correctCount === questions.length,
    });
  }, [allAnswers, isSubmitted, questions, type, onComplete]);

  const isCorrect = isSubmitted && isQuestionCorrect(question, type, selectedAnswers);

  const getOptionStyle = (index: number) => {
    const isSelected = selectedAnswers.includes(index);
    if (isSubmitted) {
      if (isOptionCorrect(index)) return 'border-system-success-100 bg-system-success-5';
      if (isSelected) return 'border-system-error-100 bg-system-error-5';
      return 'border-brand-primary-20 bg-material-surface-0 dark:bg-material-surface-100';
    }
    if (isSelected)
      return 'border-brand-primary-100 bg-brand-primary-alpha-5 dark:bg-brand-primary-100';
    return 'border-brand-primary-20 dark:border-brand-primary-80 bg-material-surface-0 dark:bg-material-surface-100';
  };

  const getOptionIconColor = (index: number) => {
    if (isSubmitted) {
      if (isOptionCorrect(index)) return 'text-system-success-100';
      if (selectedAnswers.includes(index)) return 'text-system-error-100';
    }
    return selectedAnswers.includes(index)
      ? 'text-brand-primary-100'
      : 'text-material-surface-80';
  };

  return (
    <Column className={`gap-xl ${className}`.trim()}>
      <Row className="justify-between items-center">
        <TextStyled textStyle="label" className="text-brand-primary-100">
          {type === 'true-false'
            ? 'True/False'
            : type === 'single-choice'
              ? 'Single Choice'
              : 'Multiple Choice'}
        </TextStyled>
        <TextStyled textStyle="label" className="text-material-surface-100">
          Question {currentQuestionIndex + 1} of {totalActivities}
        </TextStyled>
      </Row>

      {asset}

      <Column className="gap-md">
        <TextStyled
          textStyle="heading6"
          fontWeight="600"
          className="text-material-surface-60"
        >
          {question.question}
        </TextStyled>
      </Column>

      <Column className="gap-sm">
        {question.options.map((option, index) => (
          <PressableStyled
            key={index}
            onPress={() => handleOptionPress(index)}
            disabled={isSubmitted}
          >
            <ViewStyled className={`p-md rounded-sm border ${getOptionStyle(index)}`}>
              <Row className="items-center gap-sm">
                <Icon
                  iconName={selectedAnswers.includes(index) ? 'ico-radio-on' : 'ico-radio-off'}
                  color={getOptionIconColor(index)}
                />
                <TextStyled
                  textStyle="caption"
                  fontWeight="500"
                  className="flex-1 text-material-surface-80"
                >
                  {option}
                </TextStyled>
                {isSubmitted && isOptionCorrect(index) && (
                  <Icon iconName="ico-tick-round" color="text-system-success-100" />
                )}
                {isSubmitted && selectedAnswers.includes(index) && !isOptionCorrect(index) && (
                  <Icon iconName="ico-close-round" color="text-system-error-100" />
                )}
              </Row>
            </ViewStyled>
          </PressableStyled>
        ))}
      </Column>

      {showExplanation && question.feedback && (
        <FeedbackBanner text={question.feedback} isCorrect={isCorrect} />
      )}

      {!isSubmitted && (
        <Row className="gap-sm py-md">
          <Button
            text="Submit Answer"
            variant="primary"
            onPress={handleSubmit}
            disabled={selectedAnswers.length === 0}
            className="flex-1"
          />
        </Row>
      )}
    </Column>
  );
};

export default ActivityQuiz;
