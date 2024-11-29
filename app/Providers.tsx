
'use client';

import Theme_Provider from './Theme_Provider';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Theme_Provider>
      {children}
    </Theme_Provider>
  );
};

export default Providers;
