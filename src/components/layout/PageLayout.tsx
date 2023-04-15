import React, { HTMLProps } from "react";

const PageLayout: React.FC<HTMLProps<HTMLDivElement>> = React.memo(
  ({ children }) => {
    return (
      <div id="PageLayout" className="max-w mx-auto overflow-hidden lg:px-12">
        <div className="relative md:flex">{children}</div>
      </div>
    );
  }
);

PageLayout.displayName = "PageLayout";
export default PageLayout;
