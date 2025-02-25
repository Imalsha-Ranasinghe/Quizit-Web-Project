pipeline {
    agent any

    environment {
        MONGO_URI = credentials('MONGO_URI')
        JWT_SECRET = credentials('NINADA_IMALSHA')
    }

    stages {
        stage('Clone Repository') {
            steps {
                retry(3){
                    git branch:'test', url:'https://github.com/Imalsha-Ranasinghe/Quizit-Web-Project'
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
                sh '''
                cd backend
                export MONGO_URI=${MONGO_URI}
                export JWT_SECRET=${JWT_SECRET}
                npm install
                npm run build
                '''
            }
        }
    }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh '''
                    cd backend
                    npm test
                    '''
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh '''
                    docker-compose build
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                    docker-compose up -d
                    '''
                }
            }
        }
    }
}
