import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir el tipo para el contexto
type Theme = 'light' | 'dark';

// Crear el contexto con un valor predeterminado
const ThemeContext = createContext<Theme>('light');

export default function MyApp() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Cambiar tema
      </Button>
    </>
  );
}

// Definir tipos para las propiedades del componente Form
interface FormProps {
  children?: ReactNode;
}

function Form({ children }: FormProps) {
  return (
    <Panel title="Bienvenido">
      <Button>Registrarse</Button>
      <Button>Iniciar sesión</Button>
    </Panel>
  );
}

// Definir tipos para las propiedades del componente Panel
interface PanelProps {
  title: string;
  children?: ReactNode;
}

function Panel({ title, children }: PanelProps) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

// Definir tipos para las propiedades del componente Button
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
