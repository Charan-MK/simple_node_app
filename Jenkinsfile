pipeline {
    agnet any

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
            sh '''
                npm run test:coverage
            '''
        }
    }
}