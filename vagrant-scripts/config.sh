# Get the couchdb official apache repo
echo "deb https://apache.bintray.com/couchdb-deb xenial main" > /etc/sources.list.d/couchdb.list
curl -sL https://couchdb.apache.org/repo/bintray-pubkey.asc | sudo apt-key add -

# Set up the debconf for installing couchdb
COUCHDB_PASSWORD=password
echo "couchdb couchdb/mode select standalone
couchdb couchdb/mode seen true
couchdb couchdb/bindaddress string 127.0.0.1
couchdb couchdb/bindaddress seen true
couchdb couchdb/adminpass password ${COUCHDB_PASSWORD}
couchdb couchdb/adminpass seen true
couchdb couchdb/adminpass_again password ${COUCHDB_PASSWORD}
couchdb couchdb/adminpass_again seen true" | debconf-set-selections
DEBIAN_FRONTEND=noninteractive apt-get install -y --force-yes couchdb

# Install couchdb
apt-get update -y -q
apt-get upgrade -y -q
apt-get install -y -q couchdb

# Create a node_user for couchdb.
curl -X POST http://localhost:5984/_users/org.couchdb.user:node_user \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  --data '{"name": "node_user", "password": "reallysecure", "roles": ["api"], "type": }'
