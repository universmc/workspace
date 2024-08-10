# alias grooq
alias grooq='node /Volumes/umc/universmc/kernel/lib/dial.js'
alias did='node /Volumes/umc/universmc/kernel/lib/did.js'
alias gdev='node /Volumes/umc/universmc/gdev.js'

#alias node
alias js='node'
alias grun='npm run'

#alias Make
alias update='make update'
alias gbuild='make build'

alias auto='git clone https://github.com/universmc/auto'

alias ad-zh='vi /Volumes/umc/universmc/src/sh/lib.sh'

# alias Telegram
alias gdev='node /volumes/devops/gdev.js'
alias piBot='node /volumes/devops/models/pi/Pi-ia_bot.js'
alias blog='node /volumes/devops/blog/blog_Pibot.js'
alias GPT='node /volumes/devops/models/gpt/gpt-io.js'
alias gemini='node /volumes/devops/models/gemini/gemini_Pibot.js'
alias gpt-wallet='node /volumes/devops/items/gpt-wallet/gpt-wallet_Pibot.js'
alias ml='node /volumes/devops/public/Match_in_Learning/Match_in_learning_Pibot.js'
alias worker='node /volumes/devops/workspace/worker_Pibot.js'
alias avatars='node /volumes/devops/user/Avatars/Avatars_Pibot.js'
alias user='node /volumes/devops/user/user_Pibot.js'
alias mand='node /volumes/devops/items/gpt-wallet/models/MandatoryAi_bot.js'
alias CTF='node /volumes/devops/public/affaire_910/MandatoryAi_bot.js'
alias dCTF='node /volumes/devops/public/affaire_910/CTF.js



# alias ia 'PI'
alias pi='cd /Volumes/devops/pi/'
alias gem='cd /Volumes/devops/'
alias builder='cd /Volumes/devops/build/'


# Répertoire ia

# Alias pour les opérations Git spécifiques aux sessions
alias gss='git status -s'
alias gcs='git commit -a -m "SessionStart"'
alias gca='git commit -a -m "add"'
alias gcf='git commit -a -m "SessionEnd"'
alias gls='git log --oneline'

# Alias pour les répertoires de travail
alias home='cd /Users/universmc/'  # Répertoire de travail principal
alias src='cd /Volumes/devops/src/'  # Répertoire frontend
alias srv='cd /Volumes/devops/srv/'    # Répertoire backend
alias umc='cd /Volumes/devops/'  # Répertoire Loratory
alias desk='cd /Users/universmc/Desktop/'  # Répertoire Desktop

alias data='cd /Volumes/devops/data/'    # Répertoire data
alias wow='cd /Volumes/devops/wow/'

#alias pour la gestion des donée

alias new='mkdir'
alias add='touch'
alias edit='vim'


#alias pour les listes
# Alias pour la liste des fichiers avec des options spécifiques
alias ll='ls -lh'           # Liste les fichiers avec leurs tailles humainement lisibles
alias lt='ls -lt'           # Trie les fichiers par date de modification
alias lr='ls -lR'           # Liste les fichiers récursivement

# Alias pour la liste des fichiers avec du et des options spécifiques
alias dul='du -sh *'        # Liste la taille des fichiers et des répertoires du répertoire courant
alias duh='du -sh'          # Liste la taille du répertoire courant
alias dut='du -sh * | sort -h'  # Liste la taille des fichiers et des répertoires triés par taille

# Alias pour la liste avec l'arborescence (fonctionnalité de tree)
alias ts='tree -C'        # Liste les fichiers avec des couleurs
alias tr='tree -Cd'      # Liste les fichiers et les répertoires avec des couleurs
-- INSERT --