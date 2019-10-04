import React from "react";
import ouibounce from "ouibounce";

function useOuibounce(options) {
  const [open, setOpen] = React.useState(false);
  const [handler, setHandler] = React.useState(null);

  React.useEffect(() => {
    if (!handler) {
      const handlerRef = ouibounce(false, {
        ...options,
        callback: () => setOpen(true)
      });
      setHandler(handlerRef);
    }

    return () => (handler ? handler.disable() : null);
  }, [handler, options]);

  function handleDismiss() {
    if (handler) {
      handler.disable();
    }

    setOpen(false);
  }

  return { open, handleDismiss };
}

export default useOuibounce;
