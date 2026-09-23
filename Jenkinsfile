pipeline {
    agent any

    environment {
        IMAGE_NAME = 'itscharanmk/simple-node-app'
    }

    stages {
        agent {
            docker {
                image 'node:22-slim'
                reuseNode true
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run tests') {
            steps {
                sh '''
                    npm run test:coverage
                '''
            }
        }
    }

    stages {
        stage('Docker check') {
            sh'docker --version'
        }
        
        stage('Build image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest -t ${IMAGE_NAME}:${BUILD_NUMBER} .'
            }
        }

        stage('Verify Image') {
            steps {
                sh 'docker images | grep simple-node-app'
            }
        }
    }
}