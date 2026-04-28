/// A simple wrapper component to provide consistent padding and styling for the main content area.
// This allows us to easily adjust the layout and spacing of the content across different pages without modifying each page individually.
export default function ContentWrapper({ children }) {
  return <div className="content-wrapper">{children}</div>;
}
