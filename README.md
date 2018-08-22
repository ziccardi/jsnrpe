# Javascript Nagios Remote Plugin Executor

Enables the remote execution of Nagios plugin.

|                 | Project Info                                                     |
| --------------- | ---------------------------------------------------------------- |
| License:        | Apache License, Version 2.0                                      |
| Build:          | npm                                                              |
| Issue tracker:  | [Github](https://github.com/ziccardi/jsnrpe/issues)              |
| Mailing lists:  | [js-jnrpe-dev](https://groups.google.com/forum/#!forum/js-jnrpe) |

## License
See [LICENSE file](./LICENSE)

## Install

```bash
$ npm install -g jnrpe
```

## Usage

### Start the server
In a terminal, run
```bash
$ jnrpe start
```

To check that it works, open another terminal and run:

```
check_nrpe -2 --no-ssl -H 127.0.0.1 -p 5667
```

It should return the `jnrpe version`.

***Note**: `check_nrpe` is a standard Nagios Plugin and must be installed to have the above command work*


### List the installed pugins
```bash
$ jnrpe list
```

### Get help about a plugin
```bash
$ jnrpe help <plugin>
```

## Questions?
Join our [mailing list](https://groups.google.com/forum/#!forum/js-jnrpe) for any questions or help!

## Found a bug?
If you found a bug please create a ticket for us on [Github](https://github.com/ziccardi/jsnrpe/issues) with at least the following informations:

* js-nrpe version you are running
* the plugin you are trying to execute
* the plugin package name and version
* details on the received error
* operating system name and version
* steps to reproduce
