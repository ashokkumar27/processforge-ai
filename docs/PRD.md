# Product Requirements Document (PRD)

# AI-Native Enterprise Workflow & Rules Builder

## 1. Product Name

**ProcessForge AI**

Alternative names:

* FlowPilot AI
* Workcraft AI
* RuleFlow Studio
* OpsFlow AI
* Enterprise Process Copilot

Recommended name for now: **ProcessForge AI**.

---

## 2. Product Vision

ProcessForge AI is an AI-native enterprise workflow and rules design platform that allows business users, analysts, solution architects, and developers to describe business processes in natural language and automatically generate:

* workflow designs,
* BPMN process definitions,
* DMN decision tables,
* business rules,
* user forms,
* task screens,
* approval flows,
* audit requirements,
* API contracts,
* test cases,
* deployment-ready workflow packages.

The platform does **not** replace mature workflow and rules engines. Instead, it provides a beautiful, modern, AI-assisted product experience on top of proven execution engines such as Flowable, Camunda, Temporal, Drools, Apache KIE DMN, or equivalent engines.

The core philosophy:

> Vibe-code the experience. Do not vibe-code the execution engine.

---

## 3. Problem Statement

Enterprise teams often struggle to build and maintain business workflows because process logic is scattered across documents, emails, meetings, backend code, spreadsheets, and manual SOPs.

Traditional BPM platforms are powerful but often feel complex, technical, outdated, and difficult for business users to adopt. Low-code platforms such as Joget provide faster form and workflow creation, but can become platform-centric and may create long-term lock-in for large custom enterprise systems.

Modern AI coding tools can generate application code quickly, but they do not safely replace mature engines for long-running workflows, human approvals, audit trails, business rules, versioning, SLA handling, and compliance.

There is a market gap for a modern AI-native workflow/rules builder that:

* understands natural language business requirements,
* generates proper BPMN/DMN/rules artifacts,
* produces beautiful forms and task UIs,
* integrates with proven workflow/rules engines,
* supports governance, audit, testing, and deployment,
* can be used by both business and technical teams.

---

## 4. Product Goals

### 4.1 Primary Goals

1. Allow users to create enterprise workflows using natural language.
2. Generate BPMN workflows compatible with engines such as Flowable or Camunda.
3. Generate DMN decision tables compatible with Drools/Apache KIE or equivalent DMN engines.
4. Generate beautiful Vue/Nuxt-based task screens and forms.
5. Provide a visual workflow canvas for review and refinement.
6. Provide a decision table/rules editor for policy and eligibility logic.
7. Provide deployment packaging for workflow and rules engines.
8. Provide auditability, versioning, approval governance, and test generation.
9. Provide a Codex-friendly implementation structure so coding agents can build the product incrementally.

### 4.2 Secondary Goals

1. Provide reusable templates for common enterprise workflows.
2. Support workflow simulation before deployment.
3. Support AI-generated test cases for positive, negative, and exception scenarios.
4. Support integration with Git for version control.
5. Support integration with CI/CD.
6. Support integration with Keycloak for identity and role-based access.
7. Support multi-tenant workspace architecture.

---

## 5. Non-Goals

ProcessForge AI will **not**:

1. Build a new custom workflow execution engine from scratch.
2. Build a new custom rules engine from scratch.
3. Replace Flowable, Camunda, Temporal, Drools, or Apache KIE at runtime.
4. Allow uncontrolled direct production deployment without approval workflow.
5. Treat AI-generated artifacts as automatically production-ready without human review.
6. Become a generic no-code website builder.
7. Become a generic RPA platform.
8. Become a data pipeline orchestrator, although it may integrate with Kestra, Airflow, Dagster, or similar tools later.

---

## 6. Target Users

### 6.1 Business Analyst

Needs to convert business SOPs into structured workflows, rules, forms, and approval flows.

Primary needs:

* describe process in plain language,
* review generated workflow,
* adjust steps and conditions,
* define approval roles,
* validate business rules,
* generate documentation.

### 6.2 Solution Architect

Needs to design enterprise-grade process architecture.

Primary needs:

* define integration points,
* select workflow/rules engine,
* review generated BPMN/DMN,
* define deployment strategy,
* ensure audit/security/compliance alignment.

### 6.3 Developer

Needs implementation-ready assets.

Primary needs:

* BPMN XML,
* DMN XML,
* API contracts,
* generated Vue forms,
* backend service stubs,
* integration code,
* test cases,
* Git-ready project structure.

### 6.4 Workflow Admin

Needs to deploy, monitor, and manage process definitions.

Primary needs:

* deploy workflow versions,
* view running instances,
* manage failed jobs,
* check SLA breaches,
* view audit trail,
* rollback versions.

### 6.5 Business Approver / Governance Team

Needs to approve changes before production.

Primary needs:

* compare workflow versions,
* review rule changes,
* approve/reject deployment,
* view impact analysis,
* ensure audit readiness.

---

## 7. Core Product Concept

The product has four main layers:

```text
1. AI Design Layer
   - Natural language process intake
   - AI process decomposition
   - BPMN generation
   - DMN/rules generation
   - Form generation
   - Test generation

2. Visual Studio Layer
   - Workflow canvas
   - Rule/decision table editor
   - Form builder
   - API/integration designer
   - Simulation and validation

3. Governance Layer
   - Versioning
   - Review workflow
   - Approval workflow
   - Audit logs
   - Impact analysis
   - Deployment approval

4. Runtime Integration Layer
   - Flowable/Camunda workflow deployment
   - Drools/Apache KIE DMN deployment
   - Task API integration
   - Decision API integration
   - Runtime monitoring
```

---

## 8. Recommended Technical Architecture

### 8.1 High-Level Architecture

```text
User Browser
   |
   v
Nuxt / Vue Frontend
   |
   v
API Gateway / Backend API
   |
   |-------------------------------|
   |                               |
ProcessForge Core API          AI Orchestration Service
   |                               |
   |                               v
   |                         LLM / Coding Agent Layer
   |
   |-------------------------------|-------------------------------|
   |                               |                               |
Workflow Adapter Service       Rules Adapter Service          Form/API Generator
   |                               |                               |
   v                               v                               v
Flowable / Camunda             Drools / KIE DMN                Vue/FormKit Output
   |
   v
Workflow Runtime DB

Shared Platform:
- PostgreSQL
- Redis
- MinIO
- Keycloak
- OpenTelemetry
- Prometheus/Grafana
- Git provider integration
- CI/CD integration
```

### 8.2 Recommended Stack

| Layer            | Recommended Technology                                             |
| ---------------- | ------------------------------------------------------------------ |
| Frontend         | Nuxt 3 / Vue 3 / TypeScript                                        |
| UI System        | Tailwind CSS + shadcn-vue / Radix Vue / Headless UI                |
| Visual Canvas    | Vue Flow / Rete.js / React Flow equivalent if React is used        |
| Backend          | NestJS or FastAPI                                                  |
| AI Orchestration | Python FastAPI service or NestJS service                           |
| Workflow Engine  | Flowable OSS initially; adapter pattern for Camunda/Temporal later |
| Rules Engine     | Drools / Apache KIE DMN as decision service                        |
| Database         | PostgreSQL                                                         |
| Cache/Queue      | Redis                                                              |
| Object Storage   | MinIO                                                              |
| Auth/IAM         | Keycloak                                                           |
| Observability    | OpenTelemetry + Prometheus + Grafana                               |
| Deployment       | Docker Compose for dev; Kubernetes/OpenShift for production        |
| Version Control  | GitHub/GitLab integration                                          |
| CI/CD            | GitHub Actions/GitLab CI/Jenkins compatible                        |

### 8.3 Preferred Initial Implementation

For faster Codex implementation:

```text
Frontend: Nuxt 3 + Vue 3 + TypeScript + Tailwind
Backend: NestJS + TypeScript
AI Service: FastAPI Python service
Database: PostgreSQL
Queue: Redis
Storage: MinIO
Workflow Engine: Flowable REST API integration
Rules Engine: Drools/KIE DMN service integration
Auth: Keycloak later; simple JWT auth in local dev
```

---

## 9. Core Features

## 9.1 Workspace & Project Management

### Description

Users can create workspaces and projects. Each project represents one business domain or workflow solution.

### Requirements

1. User can create a workspace.
2. User can create a project under a workspace.
3. Project can contain multiple workflows, decisions, forms, APIs, and deployments.
4. Project has environments: Draft, Dev, Test, Staging, Production.
5. Project has members and roles.

### User Roles

| Role             | Permission                                      |
| ---------------- | ----------------------------------------------- |
| Owner            | Full access                                     |
| Architect        | Create/edit workflow and rules                  |
| Business Analyst | Create/edit draft requirements and process maps |
| Developer        | Edit technical artifacts and API mappings       |
| Reviewer         | Review and comment                              |
| Approver         | Approve deployment                              |
| Viewer           | Read-only                                       |

---

## 9.2 AI Process Intake

### Description

User describes a business process in natural language. The AI asks clarifying questions only when necessary, then generates a structured process blueprint.

### Example Input

```text
Create a vendor onboarding workflow. Vendor submits registration details and documents. Procurement officer verifies documents. If incomplete, return to vendor. If complete, system performs risk scoring. Low risk goes to manager approval. High risk goes to compliance review first. Once approved, vendor is created in ERP and notification is sent.
```

### AI Output

The system generates:

1. Process summary.
2. Actors and roles.
3. Workflow steps.
4. Human tasks.
5. System tasks.
6. Decision points.
7. Required business rules.
8. Forms required.
9. API integrations.
10. Audit requirements.
11. Suggested BPMN model.
12. Suggested DMN decision table.
13. Test scenarios.

### Acceptance Criteria

* User can submit natural language process description.
* AI returns a structured process blueprint.
* User can accept, edit, regenerate, or reject the blueprint.
* System stores all generated outputs with version number.
* AI output must clearly separate assumption from confirmed requirement.

---

## 9.3 Visual Workflow Canvas

### Description

A beautiful drag-and-drop workflow canvas where users can view and edit generated workflows.

### Canvas Requirements

The canvas must support:

* start event,
* end event,
* user task,
* service task,
* script task,
* decision gateway,
* parallel gateway,
* timer event,
* escalation event,
* boundary event,
* subprocess,
* swimlanes,
* comments,
* validation warnings.

### UX Requirements

1. Canvas should feel modern, clean, and premium.
2. Nodes should be visually distinct by type.
3. Human tasks should show assignee role.
4. Service tasks should show integration/API icon.
5. Decision nodes should show linked DMN/rule.
6. SLA/timer nodes should show time duration clearly.
7. Invalid nodes should show warning badges.
8. User should be able to zoom, pan, auto-layout, and snap-to-grid.
9. User should be able to switch between visual mode and BPMN XML mode.
10. User should be able to export BPMN XML.

### Canvas Interaction

* Click node to open right-side properties panel.
* Drag connector to create transition.
* Click gateway to configure routing condition.
* Click user task to configure form and assignment.
* Click service task to configure API call.
* Click decision task to link DMN decision.

---

## 9.4 BPMN Generation

### Description

The system generates BPMN-compatible XML from the visual workflow.

### Requirements

1. Generate valid BPMN XML.
2. Support Flowable-compatible BPMN extensions.
3. Store generated BPMN in Git-compatible format.
4. Validate BPMN before deployment.
5. Show validation errors in user-friendly way.
6. Support version comparison between BPMN versions.
7. Allow download/export.
8. Allow deployment to Flowable via REST API.

### Acceptance Criteria

* Generated BPMN can be deployed to Flowable dev environment.
* BPMN includes process key, task IDs, names, gateway expressions, and service task mappings.
* BPMN version is immutable once approved.
* New edits create a new draft version.

---

## 9.5 Rules & DMN Designer

### Description

A business-friendly rules and decision designer that allows users to define eligibility, routing, validation, risk scoring, and policy logic.

### Requirements

1. Support DMN decision table editor.
2. Support rule conditions and outputs.
3. Support versioning.
4. Support import/export DMN XML.
5. Support decision simulation.
6. Support static validation for gaps and overlaps where possible.
7. Support deployment to Drools/KIE decision service.
8. Support rule audit logging.

### Decision Table Example

|   Age | Document Valid | Payment Complete | Risk Score | Decision         |
| ----: | -------------- | ---------------- | ---------: | ---------------- |
| >= 18 | Yes            | Yes              |       < 60 | Eligible         |
| >= 18 | Yes            | Yes              |      >= 60 | Manual Review    |
|  < 18 | Any            | Any              |        Any | Not Eligible     |
|   Any | No             | Any              |        Any | Request Document |

### UX Requirements

* Spreadsheet-like editor.
* Color-coded conditions and outputs.
* Plain-English explanation panel.
* AI-assisted rule suggestion.
* Rule conflict detection.
* Test input panel.
* Decision trace output.

---

## 9.6 Form Builder

### Description

The system generates forms for human tasks.

### Requirements

1. Generate form schema from process requirements.
2. Support field types:

   * text,
   * number,
   * date,
   * dropdown,
   * checkbox,
   * radio,
   * file upload,
   * textarea,
   * table/repeating section,
   * read-only field,
   * computed field.
3. Support validation rules.
4. Support conditional visibility.
5. Support role-based field access.
6. Support preview mode.
7. Support generated Vue component export.
8. Support JSON schema export.

### UI Experience

* Left panel: field library.
* Center: form preview.
* Right panel: field properties.
* Top bar: preview, validate, generate code, save.

---

## 9.7 Task Inbox & Human Task UI

### Description

A modern task inbox for users to view, claim, complete, delegate, and approve workflow tasks.

### Requirements

1. Show assigned tasks.
2. Show candidate group tasks.
3. Support claim/unclaim.
4. Support approve/reject/return/submit actions.
5. Support task comments.
6. Support attachments.
7. Support SLA status.
8. Support priority.
9. Support filters and search.
10. Support task history timeline.

### Task Inbox Columns

| Column      | Description                    |
| ----------- | ------------------------------ |
| Task        | Task name                      |
| Process     | Process name                   |
| Case ID     | Business reference             |
| Assigned To | Current owner                  |
| Priority    | Low/Medium/High/Critical       |
| SLA         | On track / Due soon / Breached |
| Created     | Created date                   |
| Due         | Due date                       |

---

## 9.8 API & Integration Designer

### Description

Service tasks in workflow can call external APIs or internal services.

### Requirements

1. Allow API connector creation.
2. Support REST API.
3. Support authentication:

   * API key,
   * OAuth2 client credentials,
   * basic auth,
   * bearer token.
4. Support request mapping from process variables.
5. Support response mapping to process variables.
6. Support retry policy.
7. Support timeout configuration.
8. Support failure handling path.
9. Support mock response for simulation.
10. Support integration test.

---

## 9.9 Simulation & Testing

### Description

Users can simulate workflow execution before deployment.

### Requirements

1. Run workflow simulation with sample data.
2. Run decision simulation with test inputs.
3. Show path taken in workflow canvas.
4. Show rule decision trace.
5. Generate test cases automatically.
6. Support positive test case.
7. Support negative test case.
8. Support exception test case.
9. Support SLA breach simulation.
10. Export test case pack.

### AI Test Generation

For each workflow, AI should generate:

* happy path,
* missing document path,
* rejection path,
* manual review path,
* API failure path,
* SLA escalation path,
* unauthorized user path,
* invalid data path.

---

## 9.10 Governance & Approval

### Description

Workflow and rules changes must go through review and approval before production deployment.

### Requirements

1. Draft version creation.
2. Submit for review.
3. Reviewer comment.
4. Approver approve/reject.
5. Version comparison.
6. Impact analysis.
7. Deployment approval.
8. Audit log.
9. Rollback support.
10. Environment promotion.

### Governance Flow

```text
Draft
  -> Review Requested
  -> Changes Requested / Approved
  -> Ready for Deployment
  -> Deployed to Dev/Test/Staging/Production
  -> Archived / Superseded
```

---

## 9.11 Runtime Monitoring

### Description

Admin users can monitor running workflow instances.

### Requirements

1. View active process instances.
2. View completed process instances.
3. View failed service tasks.
4. View stuck workflows.
5. View SLA breaches.
6. View task backlog.
7. View average completion time.
8. View workflow bottlenecks.
9. Retry failed tasks where allowed.
10. Export operational report.

### Dashboard Widgets

* Active workflows.
* Completed workflows today.
* Failed workflow jobs.
* SLA breached tasks.
* Average approval time.
* Top bottleneck steps.
* Rule decision distribution.
* High-risk cases.

---

## 10. UI/UX Design Direction

## 10.1 Product Design Principles

1. **Premium enterprise feel** — not old-school BPM UI.
2. **AI-first, not AI-gimmick** — AI should reduce complexity.
3. **Explainable by default** — every generated workflow/rule must include reasoning and assumptions.
4. **Human-in-control** — AI suggests, human approves.
5. **Visual-first** — workflow and rules should be easy to understand visually.
6. **Developer-friendly** — every generated artifact should be exportable, versionable, and testable.
7. **Governance-ready** — changes must be traceable and auditable.

## 10.2 Visual Style

### Theme

* Clean SaaS enterprise style.
* Light and dark mode.
* Soft gradients.
* Rounded cards.
* Clear spacing.
* Subtle shadows.
* Minimal but premium.

### Recommended UI Aesthetic

```text
Modern enterprise studio:
- Linear-style navigation
- Vercel-like deployment clarity
- Retool/Appsmith-like builder productivity
- Figma-like canvas polish
- Notion-like documentation feel
- GitHub-like versioning and review flow
```

### Suggested Color Direction

* Background: neutral slate / zinc.
* Primary: electric blue or violet.
* Success: emerald.
* Warning: amber.
* Danger: rose/red.
* Workflow nodes: differentiated by type but not overly colorful.

## 10.3 Main Navigation

Left sidebar:

```text
Workspace
- Overview
- Projects
- AI Designer
- Workflows
- Decisions
- Forms
- Integrations
- Task Inbox
- Runtime Monitor
- Deployments
- Audit Logs
- Settings
```

Top bar:

```text
Project switcher | Environment selector | Search | AI Copilot | Notifications | User menu
```

## 10.4 Key Screens

### Screen 1: Landing Dashboard

Purpose: Show project status and operational overview.

Sections:

* Welcome banner.
* Create workflow with AI button.
* Recent projects.
* Active deployments.
* Pending reviews.
* Runtime health.
* Failed jobs.
* SLA breaches.

### Screen 2: AI Workflow Designer

Layout:

```text
Left: Prompt/history panel
Center: Generated process blueprint
Right: Assumptions, actors, risks, missing info
Bottom: Actions
```

Actions:

* Generate workflow.
* Generate rules.
* Generate forms.
* Generate tests.
* Send to canvas.

### Screen 3: Workflow Canvas

Layout:

```text
Left: Node palette
Center: Workflow canvas
Right: Properties panel
Bottom: Validation/test output drawer
```

Important UX:

* Auto-layout button.
* Validation badges.
* AI refine selected step.
* Convert selected step to user task/service task/decision.
* Link to form/rule/API.

### Screen 4: Decision Table Designer

Layout:

```text
Top: Decision name, version, status
Center: Spreadsheet-like decision table
Right: Explanation and test panel
Bottom: Validation warnings
```

Actions:

* Add condition.
* Add output.
* Test decision.
* Ask AI to simplify rules.
* Export DMN.

### Screen 5: Form Builder

Layout:

```text
Left: Field components
Center: Form preview
Right: Field properties
Top: Device preview + Generate Vue code
```

### Screen 6: Task Inbox

Layout:

```text
Top: Metrics cards
Center: Task table
Right: Task detail drawer
```

Task detail includes:

* form,
* comments,
* attachments,
* decision history,
* audit timeline,
* approval buttons.

### Screen 7: Deployment Center

Purpose: Manage promotion between environments.

Sections:

* Version list.
* Diff viewer.
* Approval status.
* Deployment target.
* Deployment logs.
* Rollback button.

### Screen 8: Runtime Monitor

Purpose: Monitor production workflow health.

Sections:

* Active instances.
* Failed jobs.
* SLA breaches.
* Bottleneck chart.
* Decision distribution.
* Process instance search.

---

## 11. AI Features

## 11.1 AI Process Copilot

Capabilities:

* turn SOP into process blueprint,
* extract actors,
* identify approval steps,
* identify exception paths,
* recommend SLA rules,
* suggest audit fields,
* generate BPMN,
* generate DMN,
* generate forms,
* generate tests,
* explain workflow in plain language.

## 11.2 AI Rule Copilot

Capabilities:

* convert policy text into decision table,
* detect missing rule conditions,
* detect overlapping rule logic,
* suggest simplified rules,
* generate rule explanation,
* generate test scenarios.

## 11.3 AI UI/Form Copilot

Capabilities:

* generate form fields from requirements,
* suggest validation rules,
* suggest conditional fields,
* generate Vue components,
* generate UX copy.

## 11.4 AI Technical Copilot

Capabilities:

* generate API contract,
* generate service task mapping,
* generate backend stub,
* generate deployment manifest,
* generate test pack,
* generate documentation.

---

## 12. Data Model

## 12.1 Core Tables

### users

| Field      | Type      |
| ---------- | --------- |
| id         | uuid      |
| email      | varchar   |
| name       | varchar   |
| status     | varchar   |
| created_at | timestamp |

### workspaces

| Field      | Type      |
| ---------- | --------- |
| id         | uuid      |
| name       | varchar   |
| slug       | varchar   |
| created_by | uuid      |
| created_at | timestamp |

### projects

| Field        | Type      |
| ------------ | --------- |
| id           | uuid      |
| workspace_id | uuid      |
| name         | varchar   |
| description  | text      |
| status       | varchar   |
| created_by   | uuid      |
| created_at   | timestamp |

### workflows

| Field             | Type      |
| ----------------- | --------- |
| id                | uuid      |
| project_id        | uuid      |
| name              | varchar   |
| key               | varchar   |
| description       | text      |
| status            | varchar   |
| latest_version_id | uuid      |
| created_at        | timestamp |

### workflow_versions

| Field          | Type      |
| -------------- | --------- |
| id             | uuid      |
| workflow_id    | uuid      |
| version_no     | integer   |
| status         | varchar   |
| blueprint_json | jsonb     |
| bpmn_xml       | text      |
| created_by     | uuid      |
| created_at     | timestamp |
| approved_by    | uuid      |
| approved_at    | timestamp |

### decisions

| Field             | Type    |
| ----------------- | ------- |
| id                | uuid    |
| project_id        | uuid    |
| name              | varchar |
| key               | varchar |
| description       | text    |
| status            | varchar |
| latest_version_id | uuid    |

### decision_versions

| Field               | Type      |
| ------------------- | --------- |
| id                  | uuid      |
| decision_id         | uuid      |
| version_no          | integer   |
| status              | varchar   |
| dmn_xml             | text      |
| decision_table_json | jsonb     |
| created_by          | uuid      |
| created_at          | timestamp |
| approved_by         | uuid      |
| approved_at         | timestamp |

### forms

| Field              | Type      |
| ------------------ | --------- |
| id                 | uuid      |
| project_id         | uuid      |
| name               | varchar   |
| key                | varchar   |
| schema_json        | jsonb     |
| generated_vue_code | text      |
| created_at         | timestamp |

### integrations

| Field       | Type      |
| ----------- | --------- |
| id          | uuid      |
| project_id  | uuid      |
| name        | varchar   |
| type        | varchar   |
| base_url    | varchar   |
| auth_type   | varchar   |
| config_json | jsonb     |
| created_at  | timestamp |

### deployments

| Field               | Type      |
| ------------------- | --------- |
| id                  | uuid      |
| project_id          | uuid      |
| artifact_type       | varchar   |
| artifact_id         | uuid      |
| artifact_version_id | uuid      |
| environment         | varchar   |
| status              | varchar   |
| deployed_by         | uuid      |
| deployed_at         | timestamp |
| deployment_log      | text      |

### audit_logs

| Field        | Type      |
| ------------ | --------- |
| id           | uuid      |
| workspace_id | uuid      |
| project_id   | uuid      |
| actor_id     | uuid      |
| action       | varchar   |
| entity_type  | varchar   |
| entity_id    | uuid      |
| before_json  | jsonb     |
| after_json   | jsonb     |
| created_at   | timestamp |

---

## 13. API Requirements

## 13.1 Project APIs

```http
GET /api/workspaces
POST /api/workspaces
GET /api/projects
POST /api/projects
GET /api/projects/:id
PUT /api/projects/:id
DELETE /api/projects/:id
```

## 13.2 AI Generation APIs

```http
POST /api/ai/process-blueprint
POST /api/ai/generate-bpmn
POST /api/ai/generate-dmn
POST /api/ai/generate-form
POST /api/ai/generate-tests
POST /api/ai/explain-workflow
POST /api/ai/refine-node
```

## 13.3 Workflow APIs

```http
GET /api/projects/:projectId/workflows
POST /api/projects/:projectId/workflows
GET /api/workflows/:workflowId
POST /api/workflows/:workflowId/versions
GET /api/workflow-versions/:versionId
PUT /api/workflow-versions/:versionId
POST /api/workflow-versions/:versionId/validate
POST /api/workflow-versions/:versionId/submit-review
POST /api/workflow-versions/:versionId/approve
POST /api/workflow-versions/:versionId/deploy
```

## 13.4 Decision APIs

```http
GET /api/projects/:projectId/decisions
POST /api/projects/:projectId/decisions
GET /api/decisions/:decisionId
POST /api/decisions/:decisionId/versions
POST /api/decision-versions/:versionId/validate
POST /api/decision-versions/:versionId/simulate
POST /api/decision-versions/:versionId/deploy
```

## 13.5 Form APIs

```http
GET /api/projects/:projectId/forms
POST /api/projects/:projectId/forms
GET /api/forms/:formId
PUT /api/forms/:formId
POST /api/forms/:formId/generate-vue
```

## 13.6 Runtime APIs

```http
GET /api/runtime/process-instances
GET /api/runtime/process-instances/:id
GET /api/runtime/tasks
GET /api/runtime/tasks/:id
POST /api/runtime/tasks/:id/claim
POST /api/runtime/tasks/:id/complete
POST /api/runtime/tasks/:id/delegate
GET /api/runtime/failed-jobs
POST /api/runtime/failed-jobs/:id/retry
```

---

## 14. Engine Integration Requirements

## 14.1 Flowable Adapter

The Flowable adapter service must:

1. Deploy BPMN XML to Flowable.
2. Start process instance.
3. Fetch task list.
4. Claim task.
5. Complete task.
6. Fetch process history.
7. Fetch failed jobs.
8. Retry failed jobs.
9. Map Flowable process variables to ProcessForge variables.
10. Support environment-specific Flowable endpoints.

## 14.2 Drools/KIE DMN Adapter

The rules adapter service must:

1. Deploy DMN file or decision package.
2. Evaluate decision with JSON input.
3. Return decision result and trace.
4. Store decision audit.
5. Validate DMN table.
6. Support versioned decision execution.
7. Support environment-specific rule endpoints.

---

## 15. Security Requirements

1. User authentication required.
2. Workspace-level authorization.
3. Project-level role-based access control.
4. Environment-level deployment permission.
5. Secrets must not be stored in plaintext.
6. API connector credentials must be encrypted.
7. Audit log must be immutable from UI.
8. Production deployment requires approval.
9. AI-generated artifacts must be reviewed before deployment.
10. All API calls must include request ID for traceability.
11. Support Keycloak integration for enterprise SSO.
12. Support OIDC/SAML through Keycloak.

---

## 16. Audit & Compliance Requirements

The system must capture:

* who created workflow,
* who edited workflow,
* what changed,
* when it changed,
* who approved,
* what version was deployed,
* which rule version made a decision,
* what input produced the decision,
* what decision was returned,
* which workflow path was taken,
* which user completed each task,
* comments and attachments added to task,
* deployment logs.

---

## 17. Observability Requirements

1. Structured JSON logs.
2. Distributed tracing using OpenTelemetry.
3. Metrics exposed for Prometheus.
4. Grafana dashboard templates.
5. Health endpoints for all services.
6. Error tracking.
7. AI generation latency tracking.
8. Workflow deployment success/failure tracking.
9. Decision evaluation latency tracking.
10. Failed workflow job alerts.

---

## 18. Non-Functional Requirements

## 18.1 Performance

* Dashboard load time: under 2 seconds for normal workspace.
* AI generation response: streaming preferred; first output under 5 seconds where possible.
* Task inbox query: under 1 second for normal filters.
* Decision simulation: under 500 ms excluding network overhead.
* Workflow deployment: under 10 seconds for standard BPMN.

## 18.2 Scalability

* Multi-tenant workspace architecture.
* Stateless backend services.
* Horizontal scaling on Kubernetes.
* Redis for async jobs and caching.
* PostgreSQL with proper indexing.
* Object storage for generated artifacts.

## 18.3 Availability

* Production target: 99.5% initially.
* Critical services must have health checks.
* Failed jobs must be retryable.
* Deployment should support rollback.

## 18.4 Maintainability

* Clean modular codebase.
* Strong typing with TypeScript.
* API contracts documented with OpenAPI.
* Unit tests for services.
* E2E tests for critical flows.
* Generated artifacts stored in Git-friendly format.

---

## 19. MVP Scope

Despite the product vision being broad, the first build should focus on a strong vertical slice.

### MVP Must Have

1. Workspace/project creation.
2. AI process blueprint generation.
3. Visual workflow canvas.
4. BPMN generation and export.
5. Simple Flowable deployment.
6. DMN decision table editor.
7. Simple DMN export.
8. Form schema generator.
9. Task inbox connected to Flowable.
10. Basic audit log.
11. Basic deployment center.
12. Beautiful UI foundation.

### MVP Can Exclude Initially

1. Full Keycloak integration.
2. Full Git integration.
3. Advanced simulation.
4. Advanced CMMN.
5. Complex role matrix.
6. Production-grade Kubernetes deployment.
7. Full Drools package management.
8. Advanced analytics.

---

## 20. Implementation Phases

## Phase 1: Foundation

Deliver:

* monorepo setup,
* Nuxt frontend,
* NestJS backend,
* PostgreSQL schema,
* authentication stub,
* workspace/project CRUD,
* UI layout system.

## Phase 2: AI Process Designer

Deliver:

* process prompt UI,
* AI blueprint generation API,
* structured process blueprint JSON,
* blueprint review screen,
* save version.

## Phase 3: Workflow Canvas

Deliver:

* visual canvas,
* node types,
* properties panel,
* workflow JSON model,
* BPMN XML generation,
* BPMN validation stub,
* export.

## Phase 4: Flowable Integration

Deliver:

* Flowable adapter service,
* deploy BPMN to Flowable,
* start process instance,
* fetch tasks,
* complete task,
* basic runtime monitor.

## Phase 5: DMN/Rules Designer

Deliver:

* decision table editor,
* DMN JSON model,
* DMN XML export,
* simulation panel,
* rule versioning.

## Phase 6: Form Builder

Deliver:

* generated form schema,
* form preview,
* generated Vue component output,
* link form to workflow task.

## Phase 7: Governance & Deployment

Deliver:

* submit review,
* approve/reject,
* deployment center,
* version comparison,
* audit log.

## Phase 8: Polish & Production Readiness

Deliver:

* role-based permissions,
* observability,
* Docker Compose,
* Kubernetes manifests,
* test suite,
* documentation.

---

## 21. Codex Implementation Instructions

## 21.1 Monorepo Structure

Codex should create the project using this structure:

```text
processforge-ai/
  apps/
    web/                  # Nuxt 3 frontend
    api/                  # NestJS backend API
    ai-service/           # FastAPI AI orchestration service
  packages/
    shared-types/         # Shared TypeScript types
    workflow-core/        # Workflow JSON model + BPMN generator
    decision-core/        # Decision model + DMN generator
    ui/                   # Shared UI components
  infra/
    docker/
    k8s/
    db/
  docs/
    architecture.md
    api.md
    deployment.md
  examples/
    vendor-onboarding/
```

## 21.2 Initial Codex Build Order

Codex should implement in this order:

1. Create monorepo structure.
2. Create frontend shell with beautiful layout.
3. Create backend API with project/workflow CRUD.
4. Create database schema and migrations.
5. Create AI process blueprint endpoint with mock AI response first.
6. Create workflow canvas using static JSON first.
7. Create BPMN generator from workflow JSON.
8. Create Flowable deploy adapter.
9. Create task inbox from Flowable REST.
10. Create decision table editor.
11. Create DMN export.
12. Create form builder.
13. Create governance flow.

## 21.3 Development Rule

Do not attempt to build a custom workflow runtime. Use Flowable integration for runtime execution.

Do not attempt to build a custom rules runtime. Use Drools/KIE DMN integration for real decision execution.

The application owns:

* design experience,
* versioning,
* governance,
* UI,
* audit,
* integration mapping.

The engines own:

* workflow execution,
* task lifecycle,
* timers,
* process state,
* decision evaluation.

---

## 22. Sample User Journey

### Vendor Onboarding Workflow

1. User opens ProcessForge AI.
2. User creates project: Vendor Onboarding.
3. User clicks “Create with AI”.
4. User enters process description.
5. AI generates process blueprint.
6. User reviews actors, steps, decisions, forms, and rules.
7. User sends blueprint to workflow canvas.
8. System generates BPMN.
9. User opens decision table for risk scoring.
10. AI generates risk decision table.
11. User edits rules.
12. User generates forms for vendor submission and officer review.
13. User runs simulation.
14. User submits workflow for review.
15. Reviewer approves.
16. Admin deploys to Flowable dev environment.
17. User starts test process instance.
18. Officer sees task in task inbox.
19. Officer completes task.
20. Workflow routes based on DMN decision.
21. Runtime monitor shows progress.

---

## 23. Acceptance Criteria for First Production-Ready Demo

The demo is considered successful if:

1. User can create a workflow from natural language.
2. System generates a clear process blueprint.
3. System renders the workflow visually.
4. User can edit workflow nodes.
5. System exports BPMN XML.
6. System deploys BPMN to Flowable dev instance.
7. User can start a workflow instance.
8. User can view and complete a human task.
9. User can create a DMN decision table.
10. System can simulate a decision.
11. User can generate a form for a workflow task.
12. System captures audit logs.
13. UI looks polished, modern, and enterprise-ready.

---

## 24. Success Metrics

| Metric                             | Target                               |
| ---------------------------------- | ------------------------------------ |
| Time to create first workflow      | Under 15 minutes                     |
| BPMN generation success            | > 90% for supported patterns         |
| DMN generation success             | > 90% for simple decision tables     |
| Deployment success to Flowable dev | > 95%                                |
| User satisfaction for UI           | > 8/10                               |
| Workflow review cycle reduction    | 50% faster than manual BPMN creation |
| Test case generation coverage      | At least 5 scenarios per workflow    |

---

## 25. Risks & Mitigations

| Risk                                   | Mitigation                                                  |
| -------------------------------------- | ----------------------------------------------------------- |
| AI generates invalid BPMN              | Add validation, schema checks, and human review             |
| AI misunderstands policy               | Show assumptions and require approval                       |
| Users deploy bad rules                 | Governance workflow and simulation required                 |
| Flowable/Drools integration complexity | Use adapter pattern and start with minimal supported APIs   |
| Product becomes too broad              | Focus MVP on one vertical slice                             |
| Business users find BPMN complex       | Hide XML, provide simplified visual canvas and explanations |
| Developers distrust generated assets   | Provide export, Git versioning, and tests                   |

---

## 26. Future Roadmap

### 26.1 Advanced AI Features

* SOP document upload to workflow generation.
* Meeting transcript to workflow generation.
* Policy document to DMN decision table.
* AI workflow reviewer.
* AI compliance checker.
* AI migration from Joget/Camunda/Flowable exports.

### 26.2 Runtime Enhancements

* Multi-engine support.
* Temporal integration for technical workflows.
* Kafka event integration.
* Webhook-based process triggers.
* Advanced SLA engine.
* Advanced case management.

### 26.3 Enterprise Enhancements

* Full Keycloak SSO.
* GitHub/GitLab integration.
* Pull-request style workflow review.
* Production approval workflow.
* Multi-region deployment.
* Tenant-level billing.
* Marketplace for workflow templates.

---

## 27. Final Product Positioning

ProcessForge AI is not another low-code tool.

It is an AI-native enterprise workflow and decision design studio that turns natural language requirements into governed, executable, auditable workflow and rule assets.

It gives business users the simplicity of AI and visual design, while giving developers and architects the reliability of mature engines such as Flowable and Drools.

Positioning statement:

> ProcessForge AI is the AI-native workflow and rules studio for enterprises that want the speed of vibe coding without sacrificing governance, auditability, and production reliability.

---

## 28. One-Line Codex Prompt

Use this prompt to start implementation in Codex:

```text
Build ProcessForge AI, an AI-native enterprise workflow and rules builder using Nuxt 3, NestJS, PostgreSQL, and a Flowable/Drools adapter architecture. The product must provide a beautiful modern UI with workspace/project management, AI process blueprint generation, visual workflow canvas, BPMN export/deployment to Flowable, DMN decision table editor, form builder, task inbox, deployment center, audit logs, and runtime monitoring. Do not build a custom workflow or rules runtime; integrate with Flowable and Drools/KIE through adapter services. Follow the PRD structure and implement phase by phase with clean modular code, TypeScript types, Docker Compose, seed data, and a polished enterprise UI.
```
