'use client';

import { usePathname } from 'next/navigation';
import { LinkProps } from 'next/link';
import { PropsWithChildren, useState, useEffect } from 'react';

type ActiveListItemProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

export default function ActiveListItem({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveListItemProps>) {
  const path = usePathname();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    const linkPathname = new URL((props.as || props.href) as string, location.href).pathname;

    const newClassName = linkPathname === path ? `${className} ${activeClassName}`.trim() : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
  }, [path, props.as, props.href, activeClassName, className, computedClassName]);

  return (
    <li className={'icon-box ' + computedClassName} role="tab">
      {children}
    </li>
  );
}
