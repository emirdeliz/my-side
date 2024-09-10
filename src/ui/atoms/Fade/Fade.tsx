import { ReactNode, useRef, useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import * as S from './Fade.style';

export interface FadeRouterProps {
	children: ReactNode;
}

export interface FadeProps extends FadeRouterProps {
	inFade: boolean;
}

const transitions = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const FadeBase = ({ children, inFade }: FadeProps) => {
	const ref = useRef<HTMLDivElement>(null);
	return (
		<Transition nodeRef={ref} in={inFade} timeout={S.duration}>
			{state => (
				<S.Fade ref={ref} style={{
					...transitions[state as keyof typeof transitions]
				}}>
					{children}
				</S.Fade>
			)}
		</Transition>
	);
};

const TIME_OUT = 100;

export const Fade = (props: FadeRouterProps) => {
	const [inFade, setInFade] = useState<boolean>(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => setInFade(true), TIME_OUT);
		return () => clearTimeout(timeoutId);
	}, []);
	return <FadeBase {...props} inFade={inFade} />
};