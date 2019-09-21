SHELL = /bin/bash

ROOT_DIR := $(shell pwd)
DOCKER_PATH := $(ROOT_DIR)/docker

.DEFAULT_GOAL := help
MAKEFLAGS += --warn-undefined-variables
.DELETE_ON_ERROR:

# Do not echo the commands, unless you provide VERBOSE=1
ifndef VERBOSE
  MAKEFLAGS += --silent
endif

.PHONY: up
up: \
	docker/pipelines

docker/pipelines: \
	npm \
	make-command/up

npm: \
	npm/backend \
	npm/frontend

npm/%:
	find $(ROOT_DIR)/repositories/$* -maxdepth 2 -type f -name package.json | xargs -I{} echo {} | rev | cut -d/ -f2-3 | rev | xargs -I{} sh -c "[ -d $(ROOT_DIR)/repositories/{}/node_modules ] || (cd $(DOCKER_PATH)/services/{} && make init)"

make-command/%:
	find $(DOCKER_PATH)/services -maxdepth 3 -type f -name Makefile -execdir make $* \;

.PHONY: down
down: \
	make-command/down

.PHONY: clean
clean: \
	down \
	make-command/clean

.PHONY: bash
bash:
	find $(ROOT_DIR)/docker/services -type d -name $(project) -exec sh -c 'cd {} && make bash' {} \;

.PHONY: bash-service
bash-service:
	cd $(ROOT_DIR)/docker/services/$(project) && \
	docker-compose exec $(service) sh
