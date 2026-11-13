/** Fictional-business disclaimer. Atlas Code is a demo/portfolio project, not a real company. */
export const DEMO_NOTICE =
  'Atlas Code is a fictional business created as a demo project. No real courses are offered, and no applications, messages or payments are processed.';

export function DemoBanner() {
  return (
    <div className="demo-banner" role="note" aria-label="Demo notice">
      <div className="container">
        <strong>Demo project</strong>
        <span>Atlas Code is a fictional business. No real courses, applications or payments.</span>
      </div>
    </div>
  );
}

export function FormNotice() {
  return (
    <p className="form-notice" role="note">
      <strong>Demo only:</strong> this form is not connected and no information is sent or stored. Please don’t enter real personal
      details.
    </p>
  );
}
