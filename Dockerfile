FROM python:3.11-slim

WORKDIR /app
COPY . .

RUN pip install --no-cache-dir Flask==2.3.3 gunicorn

EXPOSE 10000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:${PORT}", "main:app"]

