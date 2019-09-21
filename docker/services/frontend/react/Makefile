MAKEFLAGS += --warn-undefined-variables
.DELETE_ON_ERROR:

# Do not echo the commands, unless you provide VERBOSE=1
ifndef VERBOSE
  MAKEFLAGS += --silent
endif

.PHONY: init
init:
	docker-compose run --rm app sh -c "yarn install"

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: clean
clean: \
	down
	docker-compose run --rm app sh -c "rm -rf node_modules"

.PHONY: bash
bash:
	docker-compose exec app sh
