import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface AlertDestructiveProps extends React.HTMLAttributes<HTMLDivElement> {
  alertTitle?: string;
  alertDescription?: string;
}
export default function AlertDestructive({
  alertTitle = 'Error',
  alertDescription,
  ...props
}: AlertDestructiveProps) {
  // If there is alertDescription, return null
  if (!alertDescription) return null;

  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>{alertDescription}</AlertDescription>
    </Alert>
  );
}
