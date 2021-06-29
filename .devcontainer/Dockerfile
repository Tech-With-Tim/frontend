FROM ubuntu:20.10

ENV USERNAME=twt
ENV USER_UID=1001
ENV USER_GID=1001

COPY scripts/*.sh /tmp/scripts/

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive
RUN bash /tmp/scripts/user.sh "$USERNAME" "$USER_UID" "$USER_GID" 

ENV NVM_DIR=/home/$USERNAME/.nvm
ENV NODE_VERSION="lts/*"

RUN bash /tmp/scripts/node.sh "$NVM_DIR" "$NODE_VERSION" "$USERNAME" 
	
RUN apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /root/.gnupg
RUN rm -rf /tmp/scripts

CMD [ "sleep", "infinity" ]
