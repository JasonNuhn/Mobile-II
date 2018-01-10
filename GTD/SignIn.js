<View style={styles.container}>
        <Text>Sign Up</Text>
        </View>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
        </View>  
        <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={this.email} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Email</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.password} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Password</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._userLogout} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>    
          <TouchableHighlight onPress={this._getProtectedQuote} style={styles.button}>
            <Text style={styles.buttonText}>Get a Chuck Norris Quote!</Text>
          </TouchableHighlight>
        </View>