pipeline {
    agent none

    environment {
        IMAGE_NAME = 'itscharanmk/simple-node-app'
    }

    stages {
        stage('Install dependencies') {
            agent {
                docker {
                    image 'node:22-slim'
                    reuseNode true
                }
            }
            steps {
                sh 'npm ci'
            }
        }

        stage('Run tests') {
            agent {
                docker {
                    image 'node:22-slim'
                    reuseNode true
                }
            }
            steps {
                sh 'npm run test:coverage'
            }
        }

        stage('Docker check') {
            agent any
            steps {
                sh 'docker --version'
            }
        }

        stage('Build image') {
            agent any
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest -t ${IMAGE_NAME}:${BUILD_NUMBER} .'
            }
        }

        stage('Verify image') {
            agent any
            steps {
                sh 'docker images | grep simple-node-app'
            }
        }
    }
}