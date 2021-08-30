import React, { useState } from "react";

export function withToolkit(Component: any) {
  return function ThemedComponent(props: any) {
    const [showToolkit, setShowToolkit] = useState(false);
    
    const handleShowToolkit = (show:boolean) => {
      setShowToolkit(show);
    }

    const allProps = { ...props, handleShowToolkit, showToolkit };

    return <Component {...allProps} />;
  };
}
