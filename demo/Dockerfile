FROM openjdk:11.0.10-jdk-slim-buster as build
WORKDIR /
COPY gradlew build.gradle settings.gradle ./
COPY gradle gradle
RUN ./gradlew dependencies
RUN ./gradlew --stop
COPY . .
RUN ./gradlew build
FROM openjdk:11.0.10-jdk-slim-buster
WORKDIR /
COPY --from=build build/libs/demo-0.0.1-SNAPSHOT.jar demo.jar
ENTRYPOINT ["java","-jar","demo.jar"]