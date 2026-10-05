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

        stage('image push to artefact registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'charnode_doc_token', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login \
                        -u $DOCKER_USER \
                        --password-stdin
                        docker push ${IMAGE_NAME}:${BUILD_NUMBER}
                        docker push ${IMAGE_NAME}:latest
                    '''
                }
            }
        }
    }

    post {
        always {
            sh '''
                docker logout || true
                docker image prune -f || true
            '''
        }
    }
}