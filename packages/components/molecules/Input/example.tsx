import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Column from '@/components/atoms/Column';
import TextStyled from '@/components/atoms/TextStyled';
import Input from './index';

/**
 * Example usage of the Input component
 * Demonstrates all variants and states
 */
const InputExample = () => {
  const [basicInput, setBasicInput] = useState('');
  const [leftIconInput, setLeftIconInput] = useState('');
  const [rightIconInput, setRightIconInput] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Email validation
  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text && !text.includes('@')) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <Column className="gap-xl p-lg">
        {/* Section: Basic Input */}
        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">
            Basic Input (No Icon)
          </TextStyled>
          <Input
            label="Label text"
            placeholder="Input placeholder"
            value={basicInput}
            onChangeText={setBasicInput}
          />
        </Column>

        {/* Section: Input with Left Icon */}
        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">
            Input with Left Icon
          </TextStyled>
          <Input
            label="Label text"
            placeholder="Input placeholder"
            value={leftIconInput}
            onChangeText={setLeftIconInput}
            iconName="ico-berth-round"
            iconPosition="left"
          />
        </Column>

        {/* Section: Input with Right Icon */}
        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">
            Input with Right Icon
          </TextStyled>
          <Input
            label="Label text"
            placeholder="Input placeholder"
            value={rightIconInput}
            onChangeText={setRightIconInput}
            iconName="ico-berth-round"
            iconPosition="right"
          />
        </Column>

        {/* Section: Input with Error */}
        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">Input with Error</TextStyled>
          <Input
            label="Label text"
            placeholder="Input placeholder"
            value={errorInput}
            onChangeText={setErrorInput}
            error="Error"
            iconName="ico-berth-round"
            iconPosition="left"
          />
        </Column>

        {/* Section: Email Validation Example */}
        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">Email Validation</TextStyled>
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={handleEmailChange}
            error={emailError}
            iconName="ico-email-round"
            iconPosition="left"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Column>

        {/* Section: Focused State Demo */}
        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">
            Focus State (Tap to see)
          </TextStyled>
          <Input
            label="Focus me"
            placeholder="Tap to see focus state"
            iconName="ico-berth-round"
            iconPosition="left"
          />
        </Column>

        {/* Section: Different Input Types */}
        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">Password Input</TextStyled>
          <Input
            label="Password"
            placeholder="Enter password"
            iconName="ico-passport-round"
            iconPosition="left"
            secureTextEntry
          />
        </Column>

        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">Number Input</TextStyled>
          <Input
            label="Phone Number"
            placeholder="Enter phone number"
            iconName="ico-call-round"
            iconPosition="left"
            keyboardType="phone-pad"
          />
        </Column>

        {/* Section: Multiline (if needed) */}
        <Column className="gap-md">
          <TextStyled className="text-heading3 text-brand-primary-100">Multiline Input</TextStyled>
          <Input label="Message" placeholder="Enter your message" multiline numberOfLines={4} />
        </Column>
      </Column>
    </ScrollView>
  );
};

export default InputExample;
