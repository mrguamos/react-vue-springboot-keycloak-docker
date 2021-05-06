FROM openjdk:11.0.10-jdk-slim-buster
WORKDIR /
COPY . .
RUN ./gradlew build

ENTRYPOINT ["java","-jar","build/libs/demo-0.0.1-SNAPSHOT.jar"]