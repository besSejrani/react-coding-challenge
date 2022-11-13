# Production
run-prod:
	ENVIRONMENT=production \
	docker-compose up

# Development
run-dev:
	ENVIRONMENT=development \
	docker-compose up

run-dev-build:
	ENVIRONMENT=development \
	docker-compose up --build --remove-orphans