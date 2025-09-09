import logo from './assets/download.png';
import logo2 from './assets/react.svg';

// type Props = { type?: string; heading: string; children: React.ReactNode; closable?: boolean; onClose?: () => void; };
  

export function Alert({ type, heading, children }){
    return (
       <div>
        <div>
            <span role="img" aria-label={
                type === "warning"
                   ? "Warning"
                   : "Information"
                }
                >
                {type === "warning" ? (
                     <img src={logo} alt="Logo" />

                ) : (
                    <img src={logo2} alt="Logo" />
                )}
            </span>
            <span>{heading}</span>
        </div>
        <div>{children}</div>
       </div>
    );
}