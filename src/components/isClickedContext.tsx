import { createContext, useState } from "react";

interface IsClickContextType {
  isClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsClickContext = createContext<IsClickContextType | undefined>(
  undefined
);

export const IsClickProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <IsClickContext.Provider value={{ isClick, setIsClick }}>
      {children}
    </IsClickContext.Provider>
  );
};
