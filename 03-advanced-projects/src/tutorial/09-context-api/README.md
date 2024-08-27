# Ejemplo de Context API en React

Este proyecto demuestra cómo utilizar la Context API en React para compartir un estado global (en este caso, un tema claro u oscuro) entre componentes sin necesidad de pasar `props` manualmente a cada nivel del árbol de componentes.

## ¿Qué es la Context API?

La Context API es una característica integrada en React que permite compartir valores entre componentes sin necesidad de pasar `props` a través de cada nivel del árbol de componentes. Esto es útil para manejar estados globales y valores que deben ser accesibles por múltiples componentes en diferentes niveles.

### Conceptos Clave de la Context API

1. **Contexto**:

   - **Definición**: Un contexto es un objeto que contiene el valor que se desea compartir entre componentes. En React, se crea con `createContext`.
   - **Propósito**: Facilita el paso de datos (como el tema, el usuario autenticado, etc.) a través de un árbol de componentes sin necesidad de pasar `props` manualmente a través de cada nivel.

2. **Proveedor de Contexto (`Provider`)**:

   - **Definición**: Un `Provider` es un componente que encapsula una parte de la aplicación y proporciona el valor del contexto a sus componentes hijos.
   - **Propósito**: Permite que todos los componentes dentro de él accedan al valor del contexto. El valor proporcionado puede ser dinámico y cambiar con el tiempo.

3. **Consumo del Contexto (`useContext`)**:
   - **Definición**: `useContext` es un hook que permite a los componentes consumir el valor del contexto.
   - **Propósito**: Facilita la lectura del valor del contexto en cualquier componente que lo necesite, sin tener que pasar `props` manualmente.

## Estructura del Proyecto

El proyecto está compuesto por varios componentes que utilizan la Context API para compartir el estado del tema (`light` o `dark`).

### 1. Definir el Contexto

En este archivo, se define el contexto y se proporciona un valor predeterminado para el tema.

```typescript
import React, { createContext, useContext, useState } from "react";

// Definir un tipo para el contexto
type Theme = "light" | "dark";

// Crear el contexto con un valor predeterminado
const ThemeContext = createContext<Theme>("light");
```

````

- **`type Theme`**: Define los posibles valores para el tema, `light` y `dark`.
- **`createContext<Theme>("light")`**: Crea un contexto con un valor predeterminado de `light`. Este valor predeterminado se usará si un componente intenta consumir el contexto fuera de un `Provider`.

### 2. Proveer el Contexto

El componente `ThemeProvider` encapsula la lógica para manejar el estado del tema y proporciona el valor del contexto a los componentes hijos.

```typescript
function ThemeProvider() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app-container">
        <Panel />
        <Button onClick={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}
```

- **`useState<Theme>("light")`**: Inicializa el estado del tema con el valor `light`. `useState` devuelve una variable de estado (`theme`) y una función para actualizarla (`setTheme`).
- **`toggleTheme`**: Función para alternar el tema entre `light` y `dark`. Cambia el estado del tema cada vez que se llama.
- **`ThemeContext.Provider`**: Proporciona el valor actual del contexto (`theme`) a todos los componentes dentro de él. Los componentes `Panel` y `Button` acceden a este valor mediante el hook `useContext`.

### 3. Consumir el Contexto

Los componentes `Panel` y `Button` consumen el contexto usando `useContext` para ajustar su estilo en función del tema actual.

```typescript
function Panel() {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>Bienvenido</h1>
      <p>Este es el panel de {theme} theme</p>
    </section>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      Cambiar a {theme === "light" ? "dark" : "light"} theme
    </button>
  );
}
```

- **`useContext(ThemeContext)`**: Hook que permite a los componentes leer el valor del contexto. En este caso, obtiene el valor actual del tema (`theme`).
- **`className`**: Se construye dinámicamente en función del tema actual para aplicar los estilos correspondientes. Por ejemplo, `panel-light` o `panel-dark`.

### 4. Componente Raíz

El componente raíz de la aplicación, `App`, simplemente renderiza el `ThemeProvider`.

```typescript
function App() {
  return <ThemeProvider />;
}

export default App;
```

- **`App`**: Renderiza el `ThemeProvider`, que proporciona el contexto a todos los componentes hijos, incluyendo `Panel` y `Button`.

## Estilos CSS

Aquí tienes los estilos básicos que se aplican a los componentes dependiendo del tema actual:

```css
button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

.panel-light,
.button-light {
  background-color: #f9f9f9;
  color: #333;
}

.panel-dark,
.button-dark {
  background-color: #333;
  color: #f9f9f9;
}

.panel-light {
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.panel-dark {
  border: 2px solid #666;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.button-light {
  background-color: #007bff;
  color: white;
  margin: 5px;
}

.button-dark {
  background-color: #1e90ff;
  color: white;
  margin: 5px;
}

.button-light:hover {
  background-color: #0056b3;
}

.button-dark:hover {
  background-color: #0b63ce;
}

.panel-light h1,
.panel-dark h1 {
  margin: 0 0 10px;
  font-size: 24px;
}
```
````
