package databaseconnector.impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;

import databaseconnector.impl.callablestatement.SqlParameter;
import databaseconnector.impl.callablestatement.StatementWrapper;
import databaseconnector.interfaces.CallableStatementCreator;
import databaseconnector.proxies.Statement;

public class CallableStatementCreatorImpl implements CallableStatementCreator {

	@Override
	public StatementWrapper create(final Statement statement, final Connection connection) throws SQLException, DatabaseConnectorException {
		final IContext context = statement.getContext();
		final CallableStatement cStatement = connection.prepareCall(statement.getContent());
		//Sorting is required to ensure that parameters are processed in the order of parameter modes: IN, INOUT, and OUT.
		//This is particularly important for databases like Oracle, where refcursors in CallableStatements depend on this order.
		List<SqlParameter> parameters = Core
				.retrieveByPath(context, statement.getMendixObject(),
						Statement.MemberNames.Statement_Parameter.toString())
				.stream()
				.map(p -> SqlParameter.initialize(context, p))
				.sorted((p1, p2) -> p1.getParameterMode().compareTo(p2.getParameterMode()))
				.collect(Collectors.toList());

		for (SqlParameter p : parameters) {
			p.prepareCall(cStatement);
		}

		return new StatementWrapper(cStatement, parameters);
	}
}
