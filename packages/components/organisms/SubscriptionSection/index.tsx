import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import ButtonGroup from '../../molecules/ButtonGroup';
import PressableStyled from '../../atoms/PressableStyled';
import type { SubscriptionSectionProps } from './index.types';

/**
 * SubscriptionSection Component (Organism)
 *
 * A subscription plan selector: a row of plan options, the selected plan's
 * detail card (title, price, features with tick icons, description), and an
 * optional monthly/yearly billing toggle.
 * Presentational — purchase/billing logic lives in the consumer.
 * Source: mariner-edu organisms/SubscriptionSection (simplified — RevenueCat
 * types replaced by plain plan data).
 *
 * @example
 * <SubscriptionSection plans={[...]} selectedPlanId="pro" onSelectPlan={fn} />
 */
const SubscriptionSection = ({
  plans,
  selectedPlanId,
  onSelectPlan,
  billingPeriod = 'monthly',
  onBillingPeriodChange,
  className = '',
}: SubscriptionSectionProps) => {
  const selectedPlan = plans.find(plan => plan.id === selectedPlanId) ?? plans[0];

  return (
    <Column className={`gap-sm ${className}`.trim()}>
      {/* Plan selector */}
      <Row className="gap-sm px-xs">
        {plans.map(plan => {
          const isSelected = plan.id === selectedPlan?.id;
          return (
            <PressableStyled key={plan.id} onPress={() => onSelectPlan?.(plan.id)}>
              <ViewStyled
                className={`rounded-md border px-md py-sm ${
                  isSelected
                    ? 'border-brand-primary-100 bg-brand-primary-10'
                    : 'border-brand-primary-20 bg-material-surface-0'
                }`}
              >
                <TextStyled
                  textStyle="heading6"
                  className={isSelected ? 'text-brand-primary-100' : 'text-material-surface-80'}
                >
                  {plan.title}
                </TextStyled>
                {(plan.price || plan.priceSuffix) && (
                  <TextStyled textStyle="footnote" className="text-material-surface-60">
                    {[plan.price, plan.priceSuffix].filter(Boolean).join(' ')}
                  </TextStyled>
                )}
              </ViewStyled>
            </PressableStyled>
          );
        })}
      </Row>

      {selectedPlan?.hasBillingToggle && (
        <Row className="w-full items-center justify-center pb-lg">
          <ButtonGroup
            options={[
              { id: 'monthly', label: 'Monthly' },
              { id: 'yearly', label: 'Yearly' },
            ]}
            size="sm"
            selectedId={billingPeriod}
            onChange={id => onBillingPeriodChange?.(id as 'monthly' | 'yearly')}
          />
        </Row>
      )}

      {/* Plan details */}
      {selectedPlan && (
        <Column className="gap-sm px-xs py-xl">
          {selectedPlan.label && (
            <TextStyled textStyle="heading6" className="text-brand-primary-100">
              {selectedPlan.label}
            </TextStyled>
          )}
          <ViewStyled className="gap-sm px-xs">
            {selectedPlan.features.map(feature => (
              <Row key={feature} className="gap-sm items-start">
                <Icon
                  iconName="ico-tick-round-fill"
                  color="text-brand-primary-100"
                  className="w-4 h-4 mt-xxs"
                />
                <TextStyled textStyle="footnote" className="flex-1 text-material-surface-80">
                  {feature}
                </TextStyled>
              </Row>
            ))}
          </ViewStyled>
          {selectedPlan.description && (
            <Column className="gap-xs">
              <TextStyled textStyle="heading6" className="text-brand-primary-100">
                Ideal for:
              </TextStyled>
              <TextStyled textStyle="footnote" className="text-material-surface-80">
                {selectedPlan.description}
              </TextStyled>
            </Column>
          )}
        </Column>
      )}
    </Column>
  );
};

export default SubscriptionSection;
