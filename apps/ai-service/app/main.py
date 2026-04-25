from fastapi import FastAPI

app = FastAPI(
    title='ProcessForge AI Service',
    version='0.1.0',
    description='Scaffold service for AI-assisted workflow and decision generation.'
)


@app.get('/health')
def health() -> dict[str, str]:
    return {'status': 'ok', 'service': 'ai-service'}
