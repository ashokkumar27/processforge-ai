# ProcessForge AI Monorepo

Initial scaffold for ProcessForge AI with web, API, AI service, shared packages, and local infrastructure.

## Structure

- `apps/web` — Nuxt 3 + Vue 3 + TypeScript + Tailwind frontend shell
- `apps/api` — NestJS (TypeScript) API with TypeORM + PostgreSQL entities and workspace/project CRUD
- `apps/ai-service` — FastAPI Python service scaffold
- `packages/shared-types` — shared TypeScript types
- `packages/workflow-core` — workflow core utilities
- `packages/decision-core` — decision core utilities
- `infra/docker` — local container stack (PostgreSQL, Redis, MinIO, Flowable, KIE placeholder)
- `examples/vendor-onboarding` — starter domain example placeholder

## Quick start

### Infrastructure

```bash
docker compose -f infra/docker/docker-compose.yml up -d
```

<<<<<<< create-initial-monorepo-structure-for-processforge-ai-7rsw96
### API app

```bash
cd apps/api
npm install
npm run start:dev
npm run seed
```

### Web app

```bash
cd apps/web
npm install
npm run dev
=======
### Web app

```bash
cd apps/web
npm install
npm run dev
```

### API app

```bash
cd apps/api
npm install
npm run start:dev
>>>>>>> main
```

### AI service

```bash
cd apps/ai-service
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8002
```
