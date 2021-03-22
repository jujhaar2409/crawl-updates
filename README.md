# Crawl Updates

A basic crawler written using nodejs, cheerio and axios which checks a particular website and sends a mail if there is any update to the state of the website. The previous state of the website is stored using node-persist.

## Automating

I used to run this crawler every 6 hours with the help of windows scheduler on windows and subsequently crontab on MacOS but the frequency can be set to what you like.

## About the Usage and functionality

This is just a concept that I programmed for a particular website so it will not work with any random website url. Before using it on a different website one would have to either again set it up to read the data of the website and transfer it into a js datastructure for a specific purpose or just compare the html of the page. In that case however the update mail functionality would be slightly useful though still convinient.
