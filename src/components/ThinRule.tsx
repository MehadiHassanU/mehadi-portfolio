interface ThinRuleProps {
  className?: string;
}

export function ThinRule({ className = "" }: ThinRuleProps) {
  return <hr className={`thin-rule w-full my-12 ${className}`} aria-hidden="true" />;
}