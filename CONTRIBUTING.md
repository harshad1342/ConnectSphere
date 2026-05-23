# Contributing to ConnectSphere

Thank you for your interest in contributing! Here's how you can help.

## Development Setup

Follow the setup guide in [docs/SETUP.md](docs/SETUP.md)

## Code Standards

### Python (Backend)
- Use Black for formatting
- Follow PEP 8
- Type hints required
- Docstrings for functions

```bash
black app/
flake8 app/
pylint app/
mypy app/
```

### TypeScript/React (Frontend)
- Use ESLint
- Use Prettier for formatting
- Type safety required
- Component documentation

```bash
npm run lint
npm run format
npm run type-check
```

## Commit Messages

Format: `type(scope): description`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

Example:
```
feat(auth): add password reset functionality
fix(chat): resolve message ordering issue
docs(api): update authentication endpoints
```

## Pull Request Process

1. Create feature branch: `git checkout -b feature/description`
2. Make changes and commit
3. Push to your fork
4. Open PR with description
5. Address review comments
6. Squash commits before merge

## Testing

```bash
# Backend
cd backend
pytest -v

# Frontend
cd frontend
npm test
```

## Documentation

- Update README.md if adding features
- Document API changes
- Add inline comments for complex logic
- Update ROADMAP.md for new features

## Questions?

Open an issue or discussion on GitHub.

---

Happy coding! 🚀
