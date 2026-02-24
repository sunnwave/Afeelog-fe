export type AlertVariant = "default" | "destructive" | "success";

export type ShowAlertArgs = {
  title?: string;
  description?: string | React.ReactNode;
  variant?: AlertVariant;
  /** 자동으로 닫히게(밀리초). 예: 2500 */
  autoCloseMs?: number;
};

export type AlertState = {
  open: boolean;
  title?: string;
  description?: string | React.ReactNode;
  variant: AlertVariant;
};
