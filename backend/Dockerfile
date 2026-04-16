# Multi-stage build for diff-fuse backend

FROM python:3.14-slim

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

CMD [".venv/bin/uvicorn", "-k", "uvicorn.workers.UvicornWorker", "diff_fuse.main:app", "-b", "0.0.0.0:8000", "--workers", "4"]
