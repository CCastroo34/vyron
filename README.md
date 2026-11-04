# TeamWatch

Sitio estático de TeamWatch — experiencia de "watch party" para ver videos sincronizados con amigos.

## Estructura

```
.
├── index.html        # Landing page
├── login.html         # Inicio de sesión
├── register.html      # Registro
├── room.html           # Sala de watch party
├── mac_error.html      # Página de error (macOS)
├── privacy.html         # Política de privacidad
├── terms.html            # Términos de servicio
├── css/                   # Estilos
├── fonts/                  # Fuentes (Font Awesome)
├── images/                  # Imágenes
└── media/                    # Video de la landing page
```

## Despliegue en Vercel

Este es un sitio puramente estático (HTML/CSS), no requiere build. Al importar el repo en Vercel:

- **Framework Preset:** Other
- **Build Command:** (vacío)
- **Output Directory:** `.`

Vercel detectará automáticamente `index.html` como la página principal.

## Nota

Este sitio es solo el front-end (maquetado). Los formularios de `login.html` y `register.html` no tienen backend conectado todavía: habría que integrarlos con un servicio de autenticación o API propia para que funcionen.
