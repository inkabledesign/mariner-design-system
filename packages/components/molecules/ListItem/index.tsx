import React from "react";
import Avatar from "../Avatar";
import CircleProgress from "../../atoms/CircleProgress";
import Column from "../../atoms/Column";
import Icon from "../../atoms/Icon";
import PressableStyled from "../../atoms/PressableStyled";
import Row from "../../atoms/Row";
import TextStyled from "../../atoms/TextStyled";
import ToggleSwitch from "../../atoms/ToggleSwitch";
import type { ListItemProps } from "./index.types";

type RadioIndicatorProps = {
  checked: boolean;
  onPress?: () => void;
};

const RadioIndicator = ({ checked, onPress }: RadioIndicatorProps) => {
  const indicator = (
    <Icon
      iconName={checked ? "ico-radio-on" : "ico-radio-off"}
      color="text-brand-primary-100"
      className="h-9 w-9"
    />
  );

  if (!onPress) return indicator;

  return (
    <PressableStyled
      accessibilityRole="radio"
      accessibilityState={{ checked }}
      className="h-9 w-9 items-center justify-center border-0 bg-transparent p-0"
      hitSlop={4}
      onPress={onPress}
    >
      {indicator}
    </PressableStyled>
  );
};

/**
 * ListItem Component (Molecule)
 *
 * A configurable list row with optional leading and trailing slots plus a
 * label/title/caption text stack. Every element renders conditionally —
 * provide a prop to show it, omit it to hide it.
 * Source: Mariner-Library / Molecules / List/ListItem (Figma).
 *
 * @example
 * <ListItem label="Label" title="Text" leading="icon" trailing="icon" />
 */
const ListItem = ({
  label,
  title,
  caption,
  value,
  leading,
  leadingIconName = "ico-berth-round",
  leadingProgress,
  avatarImageUrl,
  avatarIconName,
  trailing,
  trailingIconOne = "ico-chevron-right",
  trailingIconTwo,
  checked = false,
  onToggle,
  onPress,
  themeMode = "light",
  className = "",
}: ListItemProps) => {
  const handleToggle = onToggle ? () => onToggle(!checked) : undefined;

  const leadingContent = (() => {
    switch (leading) {
      case "avatar":
        return (
          <Avatar
            size={36}
            imageUrl={avatarImageUrl}
            iconName={avatarIconName}
            hasAddButton={false}
          />
        );
      case "switch":
        return (
          <ToggleSwitch
            checked={checked}
            onToggle={onToggle}
            themeMode={themeMode}
          />
        );
      case "radio":
        return <RadioIndicator checked={checked} onPress={handleToggle} />;
      case "icon":
        return (
          <Row className="relative h-7 w-7 items-center justify-center">
            <Icon
              iconName={leadingIconName}
              color="text-brand-primary-100"
              className="h-md w-md"
            />
            {leadingProgress != null && (
              <Row className="absolute inset-0 rotate-180">
                <CircleProgress
                  progress={leadingProgress}
                  progressColor="text-brand-primary-100"
                  railColor="text-brand-primary-20"
                  size={28}
                  strokeWidth={2.24}
                />
              </Row>
            )}
          </Row>
        );
      default:
        return null;
    }
  })();

  const hasTrailingContent = Boolean(value || trailing);

  const content = (
    <Row
      className={`min-h-[52px] w-full items-center gap-md border-b border-brand-primary-10 bg-material-surface-light px-lg py-xs ${className}`.trim()}
    >
      {leadingContent && (
        <Row className="shrink-0 items-center gap-[10px]">{leadingContent}</Row>
      )}

      <Column className="min-w-0 flex-1 items-start">
        {label && (
          <Row className="h-[18px] w-full items-center">
            <TextStyled
              textStyle="label"
              className="text-left text-brand-primary-100"
            >
              {label}
            </TextStyled>
          </Row>
        )}
        {title && (
          <TextStyled
            textStyle="heading6"
            className="w-full text-left text-text-dark-primary"
          >
            {title}
          </TextStyled>
        )}
        {caption && (
          <TextStyled
            textStyle="caption"
            className="w-full text-left text-material-surface-60"
          >
            {caption}
          </TextStyled>
        )}
      </Column>

      {hasTrailingContent && (
        <Row className="shrink-0 items-center gap-[10px]">
          {value && (
            <Row className="items-center justify-center">
              <TextStyled
                textStyle="heading6"
                numberOfLines={1}
                className="text-material-surface-60"
              >
                {value}
              </TextStyled>
            </Row>
          )}
          {trailing === "switch" && (
            <ToggleSwitch
              checked={checked}
              onToggle={onToggle}
              themeMode={themeMode}
            />
          )}
          {trailing === "radio" && (
            <RadioIndicator checked={checked} onPress={handleToggle} />
          )}
          {trailing === "icon" && trailingIconTwo && (
            <Icon
              iconName={trailingIconTwo}
              color="text-brand-primary-100"
              className="h-md w-md"
            />
          )}
          {trailing === "icon" && (
            <Icon
              iconName={trailingIconOne}
              color="text-brand-primary-100"
              className="h-md w-md"
            />
          )}
        </Row>
      )}
    </Row>
  );

  if (!onPress) return content;

  return (
    <PressableStyled
      accessibilityRole="button"
      className="w-full border-0 bg-transparent p-0"
      onPress={onPress}
    >
      {content}
    </PressableStyled>
  );
};

export default ListItem;
