pipeline {
    agent {
        docker {
            image 'node:22-slim'
            reuseNode true
        }
    }

    environment {
        IMAGE_NAME = 'itscharanmk/simple-node-app'
    }

    stages {
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