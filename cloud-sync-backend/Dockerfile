FROM python:3.10-alpine
WORKDIR /code
RUN apk add --no-cache gcc musl-dev linux-headers g++
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
