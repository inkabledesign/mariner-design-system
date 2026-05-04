export type SignalDurationType = 'short' | 'long';
export interface SoundShapeProps {
  duration?: SignalDurationType;
  style?: 'accent' | 'primary';
}

export interface SoundShapesProps {
  signal?: {
    name?: string;
    signalSounds?: SignalDurationType[];
  };
}
