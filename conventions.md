# conventions.md

## Naming & Structure
- **Files/Folders**: kebab-case (`project-card.tsx`)
- **Components**: PascalCase (`ProjectCard`)
- **Functions/Variables**: camelCase (`getFeaturedPosts`)
- **Tests**: `.test.tsx` or `.spec.tsx` suffix

## Component Best Practices
- **< 50 lines** per function/component 
- **JSDoc comments** for all functions/components
- **Props typing** with explicit interfaces
- Group imports: external → internal → types
- Order within component: hooks → handlers → computed values → render
- Destructure props in parameters
- Avoid nested ternaries; use early returns

## TypeScript
- Prefer explicit types over `any`
- Use type inference where appropriate
- Define interfaces/types in component file or dedicated types file
- Use discriminated unions for complex state

## React/Next.js
- Use functional components exclusively
- Prefer React Server Components where possible
- Extract complex logic to custom hooks
- Keep state as local as possible
- Use proper keys in lists (not index)
- Avoid prop drilling with context where appropriate

## Styling (Tailwind)
- Use consistent spacing 
- Use `cn()` utility for conditional classes

## Performance
- Use proper Image component optimization
- Lazy load below-the-fold content
- Memoize expensive calculations
- Use dynamic imports for large components
- Implement proper loading states

## Code Quality
- No unused imports, variables, or `console.log`
- Descriptive variable/function names
- Strong typing for all functions and components
- Proper error handling
- Add detailed comments for complex logic

## Folder Structure
```
src/
├── app/              # App router pages
├── components/       # UI components
│   ├── ui/           # shadcn components
│   ├── layout/       # Layout components
│   ├── [feature]/    # Feature-specific components
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
├── types/            # TypeScript types/interfaces
├── content/          # MDX content
├── public/           # Static assets
```
