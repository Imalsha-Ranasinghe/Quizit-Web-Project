pipeline {
    agent any

    environment {
        MONGO_URI = credentials('MONGO_URI')
        JWT_SECRET = credentials('NINADA_IMALSHA')
    }

    stages {
        stage('Clone Repository') {
            steps {
                retry(3) {
                    git branch: 'test', url: 'https://github.com/Imalsha-Ranasinghe/Quizit-Web-Project'
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI'),
                        string(credentialsId: 'NINADA_IMALSHA', variable: 'JWT_SECRET')
                    ]) {
                        // Handle different OS environments
                        if (isUnix()) {
                            sh '''
                            cd backend
                            export MONGO_URI=${MONGO_URI}
                            export JWT_SECRET=${JWT_SECRET}
                            npm install
                            npm run build
                            '''
                        } else {
                            bat '''
                            cd backend
                            set MONGO_URI=%MONGO_URI%
                            set JWT_SECRET=%JWT_SECRET%
                            npm install
                            npm run build
                            '''
                        }
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Handle different OS environments for tests
                    if (isUnix()) {
                        sh '''
                        cd backend
                        npm test
                        '''
                    } else {
                        bat '''
                        cd backend
                        npm test
                        '''
                    }
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Handle Docker commands with retry in case of failures
                    if (isUnix()) {
                        sh '''
                        docker-compose build
                        '''
                    } else {
                        bat '''
                        docker-compose build
                        '''
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy using Docker Compose with retry for failures
                    if (isUnix()) {
                        sh '''
                        docker-compose up -d
                        '''
                    } else {
                        bat '''
                        docker-compose up -d
                        '''
                    }
                }
            }
        }
    }
}
