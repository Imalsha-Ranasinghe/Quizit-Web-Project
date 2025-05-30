pipeline {
    agent any

    environment {
        GITHUB_REPO = 'https://github.com/Imalsha-Ranasinghe/Quizit-Web-Project'
        DOCKER_IMAGE_BACKEND = 'imalsha119/quizit-web-project-backend'
        DOCKER_IMAGE_FRONTEND = 'imalsha119/quizit-web-project-frontend'
        EC2_USER = 'ubuntu'
        EC2_IP = '51.21.199.245'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: "${GITHUB_REPO}"
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE_BACKEND} ./backend'
                    sh 'docker build -t ${DOCKER_IMAGE_FRONTEND} ./frontend'
                }
            }
        }

        stage('Push Docker Images to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'quizit-dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push ${DOCKER_IMAGE_BACKEND}'
                        sh 'docker push ${DOCKER_IMAGE_FRONTEND}'
                    }
                }
            }
        }

        stage('Clone Repo on EC2') {
    steps {
        script {
            withCredentials([sshUserPrivateKey(credentialsId: 'quizit-ssh', keyFileVariable: 'SSH_KEY_FILE')]) {
                sh """
                    ssh -o StrictHostKeyChecking=no -i ${SSH_KEY_FILE} ${EC2_USER}@${EC2_IP} <<EOF
                    # Ensure Git is installed
                    sudo apt-get update -y
                    sudo apt-get install -y git

                    # Remove existing repo and clone the latest version
                    rm -rf ~/Quizit-Web-Project
                    git clone ${GITHUB_REPO} ~/Quizit-Web-Project
EOF
                """
            }
        }
    }
}


        stage('Deploy to EC2') {
    steps {
        script {
            withCredentials([sshUserPrivateKey(credentialsId: 'quizit-ssh', keyFileVariable: 'SSH_KEY_FILE')]) {
                sh """
                    ssh -o StrictHostKeyChecking=no -i ${SSH_KEY_FILE} ${EC2_USER}@${EC2_IP} << 'EOF'
                        # Update Node.js to version 20
                        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                        sudo apt-get install -y nodejs
                        
                        # Navigate to repo
                        cd ~/Quizit-Web-Project

                        # Update the .env file
                        echo "VITE_API_URL=http://${EC2_IP}:5000" > ~/Quizit-Web-Project/frontend/.env

                        # Build the frontend
                        cd ~/Quizit-Web-Project/frontend
                        rm -rf dist node_modules
                        npm install
                        npm run build

                        # Pull the latest Docker images
                        docker pull ${DOCKER_IMAGE_BACKEND}
                        docker pull ${DOCKER_IMAGE_FRONTEND}

                        # Start containers using docker-compose
                        cd ~/Quizit-Web-Project
                        docker-compose down
                        docker-compose up -d --build
EOF
                """
            }
        }
    }
}


    }
}