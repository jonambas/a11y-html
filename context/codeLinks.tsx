import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState
} from 'react';

type Context = {
  add: (node?: any) => void;
  setActive: (obj: { [k: string]: boolean }) => void;
  links: string[];
  active: { [k: string]: boolean };
};

const CodeLinkContext = createContext<Context>({
  add: () => {},
  setActive: () => {},
  links: [],
  active: {}
});

export const useCodeLinks = () => {
  const context = useContext(CodeLinkContext);
  if (!context) {
    throw new Error('Context missing');
  }
  return context;
};

export const CodeLinkProvider: FC<PropsWithChildren> = (props) => {
  const [links, setLinks] = useState<Context['links']>([]);
  const [active, setActive] = useState<Context['active']>({});

  const add: Context['add'] = (hrefs) => {
    setLinks([...links, hrefs]);
  };

  const set: Context['setActive'] = (obj) => {
    setActive(obj);
  };

  return (
    <CodeLinkContext.Provider value={{ add, setActive: set, links, active }}>
      {props.children}
    </CodeLinkContext.Provider>
  );
};
