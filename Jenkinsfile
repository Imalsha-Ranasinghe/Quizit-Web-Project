pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                retry(3) {
                    git branch: 'testquizit-pipeline', url: 'https://github.com/Imalsha-Ranasinghe/Quizit-Web-Project'
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'mongo-uri', variable: 'MONGO_URI'),
                        string(credentialsId: 'jwt-secret', variable: 'JWT_SECRET')
                    ]) {
                        if (isUnix()) {
                            sh '''
                            cd backend
                            export MONGO_URI=$MONGO_URI
                            export JWT_SECRET=$JWT_SECRET
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
                    retry(2) {
                        if (isUnix()) {
                            sh 'docker-compose build'
                        } else {
                            bat 'docker-compose build'
                        }
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    retry(2) {
                        if (isUnix()) {
                            sh 'docker-compose up -d'
                        } else {
                            bat 'docker-compose up -d'
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline execution completed."
            echo "Cleaning up resources..."
            script {
                if (isUnix()) {
                    sh 'docker-compose down'
                } else {
                    bat 'docker-compose down'
                }
            }
        }
        failure {
            echo "Pipeline failed! Check logs for errors."
        }
    }
}
