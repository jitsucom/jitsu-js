package jitsujs

import (
	"dagger.io/dagger"
	"dagger.io/dagger/core"
	"universe.dagger.io/alpine"
	"universe.dagger.io/bash"
	"universe.dagger.io/docker"
)

dagger.#Plan & {
	client: {
		filesystem: {
			"./": read: {
				contents: dagger.#FS
				exclude: [
					"README.md",
					"dagger.cue",
					"node_modules",
				]
			}
		}
	}
	actions: {
		deps: docker.#Build & {
			steps: [
				alpine.#Build & {
					packages: {
						bash: {}
						npm: {}
						yarn: {}
						git: {}
						make: {}
						chromium: {}
						"py3-pip": {}
						"g++": {}
					}
				},
				docker.#Copy & {
					contents: client.filesystem."./".read.contents
					dest:     "/"
				},
				bash.#Run & {
					workdir: "/"
					mounts: {
						"/cache/yarn": {
							dest:     "/cache/yarn"
							type:     "cache"
							contents: core.#CacheDir & {
								id: "jitsu-js-yarn-cache"
							}
						}
					}

					script: contents: #"""
						yarn global add lerna
						yarn boot
					"""#
				}
			]
		}

		build: bash.#Run & {
			input:   deps.output
			workdir: "/"
			script: contents: #"""
					yarn build
				"""#
		}

		test: bash.#Run & {
			input:   build.output
			workdir: "/"
			script: contents: #"""
					yarn test
				"""#
		}
	}
}