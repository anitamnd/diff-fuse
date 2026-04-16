# Multi-stage build for diff-fuse backend

FROM python:3.12-slim

WORKDIR /app

RUN pip install --no-cache-dir poetry

COPY pyproject.toml ./
COPY README.md ./
COPY src/ ./src/

RUN poetry config virtualenvs.in-project true && \
    poetry install --without dev --no-interaction --no-ansi

RUN useradd -m -u 1000 appuser && \
    chown -R appuser:appuser /app
USER appuser

CMD [".venv/bin/uvicorn", "diff_fuse.main:app", "--host", "0.0.0.0", "--port", "8000"]
